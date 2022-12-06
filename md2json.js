const fs = require('fs');
const showdown = require('showdown');
const html2json = require('html2json').html2json;
const json2html = require('html2json').json2html;

converter = new showdown.Converter({completeHTMLDocument: true, tables: true});

let child = []
let tag = '';
let object = {};
object.introduction = [];
object.subintroduction = [];
object.exercise_description = [];
object.category = [];
object.hints = [];

try {
  const data = fs.readFileSync('input/Ex5.md', 'utf8');
  html = converter.makeHtml(data);

  try {
    fs.writeFileSync('output/output.html', html, { flag: 'w+' });
    
    json = html2json(html);
    json2text = JSON.stringify(json);
   
    fs.writeFileSync('output/output.json', json2text, { flag: 'w+' });
    
    child = json['child'][0]['child'][3]['child']

    function getAttributeID(data){
      return data['attr']['id'];
    }

    function getTag(data){
      return data['tag'];
    }

    function setChildTag(text){
      tag = text;
    }

    function getChildTag(){
      return tag;
    }
    
    for (let i in child) {
      if (child[i]['node']==='element'){
        if (getTag(child[i])==='h1'){
          object.exercise = child[i]['child'][0]['text'].split(":")[0].toLowerCase();
          object.type = child[i]['child'][0]['text'].split(":")[1]
        }

        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='chapter'){
          setChildTag('chapter'); 
        }
        
        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='chapterintroduction'){
          setChildTag('chapterintroduction'); 
        }

        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='subchapter'){
          setChildTag('subchapter'); 
        }

        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='subchapterintroduction'){
          setChildTag('subchapterintroduction'); 
        }

        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='exercisedescription'){
          setChildTag('exercisedescription'); 
        }

        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='code'){
          setChildTag('code'); 
        }

        if (getTag(child[i])==='h3'){
          setChildTag(getAttributeID(child[i])); 
        }

        if (getTag(child[i])==='p' || getTag(child[i])==='pre' || getTag(child[i])==='ul' || getTag(child[i])==='ol'){
          
          if (getChildTag()==='chapter') {
            chArr = child[i]['child'][0]['text'].toLowerCase().split(",");
            for (let i = 0; i < chArr.length; i++) {
              object.category[i] = {'chapter':'', 'subchapter':[]}
              object.category[i].chapter = chArr[i].trim();
            } 
          }
          else if (getChildTag()==='subchapter'){
            subArr = child[i]['child'][0]['text'].toLowerCase().split(",");
            for (let i = 0; i < subArr.length; i++) {
              subSplit = subArr[i].split(":");
              for (let x = 0; x < subSplit.length; x++) {
                object.category[i].subchapter.push(subSplit[x].trim());
              } 
            }
          }
          else if (getChildTag()==='chapterintroduction')
            object.introduction.push(json2html(child[i]).toLowerCase());
          else if (getChildTag()==='subchapterintroduction')
            object.subintroduction.push(json2html(child[i]).toLowerCase());  
          else if (getChildTag()==='exercisedescription')
            object.exercise_description.push(json2html(child[i]).toLowerCase());
          else if (getChildTag()==='code') 
            object.code = child[i]['child'][0]['child'][0]['text'];
          else if (getChildTag().indexOf('hint')===0){
            if (getTag(child[i])==='p' && !json2html(child[i]).includes('points') && !json2html(child[i]).includes('Points')){
              object.hints[Number(getChildTag().split('hint')[1])-1] = {'text':'', 'code':'', 'penalty':''};
              object.hints[Number(getChildTag().split('hint')[1])-1].text = json2html(child[i]).toLowerCase();
            }
            
            if (getTag(child[i])==='pre'){
              object.hints[Number(getChildTag().split('hint')[1])-1].code = json2html(child[i]).toLowerCase();
            }
            
            if (json2html(child[i]).includes('Points') || json2html(child[i]).includes('points'))
              object.hints[Number(getChildTag().split('hint')[1])-1].penalty = json2html(child[i]).toLowerCase();
           }  
        }
      }
    }

    console.log(object);
    object2text=JSON.stringify(object);
    fs.writeFileSync('output/dom.json', object2text, { flag: 'w+' });
  } catch (err) {
    console.error(err);
  }
} catch (err) {
  console.error(err);
}
