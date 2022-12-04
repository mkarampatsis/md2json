const fs = require('fs');
const showdown = require('showdown');
const html2json = require('html2json').html2json;
const json2html = require('html2json').json2html;

converter = new showdown.Converter({completeHTMLDocument: true, tables: true});

try {
  const data = fs.readFileSync('input/Ex2.md', 'utf8');
  html = converter.makeHtml(data);

  try {
    fs.writeFileSync('output/output.html', html, { flag: 'w+' });
    
    json = html2json(html);
    json2text = JSON.stringify(json);
   
    fs.writeFileSync('output/output.json', json2text, { flag: 'w+' });
    
    let child = json['child'][0]['child'][3]['child']

    dom = []

    function getAttribute(data){
      return data['attr'];
    }

    function getTag(data){
      return data['tag'];
    }

    for (let i in child) {
      object = {}
      if (child[i]['node']==='element'){
        object['tag'] = getTag(child[i]);
        if (child[i]['attr']) {
          object['attribute'] = getAttribute(child[i]);
        }
        if (child[i]['child'].length>0 && ['p', 'pre'].includes(child[i]['tag'])){
            object['text'] = json2html(child[i]).toLowerCase();
        }
        if (child[i]['child'].length>0 && ['h1', 'h2', 'h3'].includes(child[i]['tag'])){
          object['text'] = child[i]['child'][0]['text'].toLowerCase();
        } 
        if (child[i]['tag']==='h1'){
          child[i]['child'][0]['text'].split(":")
          object['type'] = child[i]['child'][0]['text'].split(":")[1]
        }
      }
      if (Object.keys(object).length != 0) {
        dom.push(object)
      }
    }
    
    console.log(dom);
    dom2text=JSON.stringify(dom);
    fs.writeFileSync('output/dom.json', dom2text, { flag: 'w+' });
  } catch (err) {
    console.error(err);
  }
} catch (err) {
  console.error(err);
}
