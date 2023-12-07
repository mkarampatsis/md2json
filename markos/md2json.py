import markdown_to_json

value = """
# Nested List

* Item 1
    * Item 1.1
* Item 2
"""

# The simple way:
dictified = markdown_to_json.dictify(value)
assert dictified == {'Nested List': ['Item 1', ['Item 1.1'], 'Item 2']}

# Or, if you want a json string
jsonified = markdown_to_json.jsonify(value)
assert jsonified == """{"Nested List": ["Item 1", ["Item 1.1"], "Item 2"]}"""