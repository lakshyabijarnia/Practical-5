const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};


function replaceString(string, start, end){
  var newString = "";
  newString += string.substring(0, start);
  newString += MATCH_LIST[string.substring(start, end)];
  newString += string.substring(end, string.length);

  return newString;
}

function transformTextNodes(node) {

  if (typeof(node) === 'undefined'){
    return;
  }
  else if (node.childNodes.length == 0){
    if (typeof(node.nodeValue) == 'string'){
      toReplace = {};
      for (vars in MATCH_LIST){
        index = node.nodeValue.indexOf(vars);
        if (index != -1){
          toReplace[vars] = index;
        }
      }
      str = node.nodeValue;
      for (vars in toReplace){
        index = toReplace[vars]
        str = replaceString(str, index, index+vars.length);
      }

      node.nodeValue = str;
    }
  }
  else{
    for (let i=0; i<node.childNodes.length; i++){
      transformTextNodes(node.childNodes[i]);
    }
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');