import markdown2
import xmltojson
import json

from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Encountered a start tag:", tag)

    def handle_endtag(self, tag):
        print("Encountered an end tag :", tag)

    def handle_data(self, data):
        print("Encountered some data  :", data)

# parser = MyHTMLParser()

html = markdown2.markdown_path('input/Ex1.md', extras=["markdown-in-html"])
file1 = open('output/output2.html', 'w')
file1.write(html)
# parser.feed(html)

# with open("output/output2.html", "r") as html_file:
#   html = html_file.read()
print(html)
# json_ = xmltojson.parse(html)

# with open("output/data.json", "w") as file:
#   json.dump(json_, file)

# print(json_)



