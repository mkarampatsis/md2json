const fs = require('fs');
const showdown = require('showdown');
const html2json = require('html2json').html2json;
const json2html = require('html2json').json2html;

converter = new showdown.Converter({completeHTMLDocument: true, tables: true});

let child = []
let tag = '';
let object = {};
object.introduction = [];
object.exercise_description = [];
// object.code = [];
object.hints = [];

try {
  const data = fs.readFileSync('input/Ex2.md', 'utf8');
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

        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='subchapter'){
          setChildTag('subchapter'); 
        }

        if (getTag(child[i])==='h2' && getAttributeID(child[i])==='introduction'){
          setChildTag('introduction'); 
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

        if (getTag(child[i])==='p' || getTag(child[i])==='pre' || getTag(child[i])==='ul'){
          
          if (getChildTag()==='chapter')
            object.chapter = json2html(child[i]).toLowerCase();
          else if (getChildTag()==='subchapter')
            object.subchapter = json2html(child[i]).toLowerCase();
          else if (getChildTag()==='introduction')
            object.introduction.push(json2html(child[i]).toLowerCase());
          else if (getChildTag()==='exercisedescription')
            object.exercise_description.push(json2html(child[i]).toLowerCase());
          else if (getChildTag()==='code') 
            object.code = child[i]['child'][0]['child'][0]['text'];
          else if (getChildTag().indexOf('hint')===0){
            object.hints[Number(getChildTag().split('hint')[1])-1] = {'text':'', 'code':'', 'penalty':''};
            
            console.log(Number(getChildTag().split('hint')[1])-1, getTag(child[i]),json2html(child[i]));
            console.log("1>>>",getTag(child[i])==='p' && !json2html(child[i]).includes('points') && !json2html(child[i]).includes('Points'));
            
            if (getTag(child[i])==='p' && (!json2html(child[i]).includes('points') || !json2html(child[i]).includes('Points')))
              object.hints[Number(getChildTag().split('hint')[1])-1].text = json2html(child[i]).toLowerCase();
            
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
