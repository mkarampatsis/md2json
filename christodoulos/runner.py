import subprocess
from dotenv import load_dotenv
import os
from mongoengine import *
from io import StringIO
from contextlib import redirect_stdout
from pprint import pprint

load_dotenv()

connect(
    db=os.getenv("DB"),
    username=os.getenv("USERNAME"),
    password=os.getenv("PASSWORD"),
    host=os.getenv("HOST"),
    alias="code4code"
)


class Exercises(DynamicDocument):
    meta = {"db_alias": "code4code"}


def html2code(html_str):
    return html_str.strip().replace("&gt;", ">").replace("&lt;", "<").replace("&amp;", "&")


def sanitize(output_str):
    return output_str.strip().replace(" ^ ", "\n").replace("^", "\n")


def node_error_str(node_output):
    for line in node_output.split("\n"):
        if 'Error: ' in line:
            return line


runtimeErrors = []
wrongOutputs = []

for ex in Exercises.objects():
    if ex.type == 'python':
        code = html2code(ex.code)
        try:
            f = StringIO()
            with redirect_stdout(f):
                exec(code)
            result = f.getvalue().strip()
            output = ""
            for line in ex.output:
                output += sanitize(line)
            if result != output:
                error = {
                    "id": ex.id,
                    "expected": result,
                    "inmongo": output
                }
                wrongOutputs.append(error)
        except Exception as exc:
            error = {
                "id": ex.id,
                "error": exc
            }
            runtimeErrors.append(error)
    # else:
    #     print(ex.id)
    #     code = html2code(ex.code)
    #     cmd = ('/home/christodoulos/.nvm/versions/node/v18.12.1/bin/node', '-e', code)
    #     p = subprocess.run(cmd, capture_output=True, text=True)
    #     if p.stderr:
    #         print(node_error_str(p.stderr))
    #         print(ex.output[0].split('\n')[1].replace('Uncaught ', ''))


if len(runtimeErrors):
    print("RUNTIME ERRORS")
    for error in runtimeErrors:
        pprint(error)

if len(wrongOutputs):
    print("WRONG OUTPUTS")
    for error in wrongOutputs:
        pprint(error)
