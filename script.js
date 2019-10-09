
var editor = ace.edit("editor");

  

  editor.getSession().setMode("ace/mode/html");
  editor.setFontSize("15px");
  editor.setPrintMarginColumn(false);
  editor.insert(document.getElementById("sample").value);
  editor.setOptions({
    maxLines: 20
  });

 document.getElementById('md').innerHTML =
 marked(editor.getValue());


  

  editor.session.on('change', function(delta) {
    // delta.start, delta.end, delta.lines, delta.action
    document.getElementById('md').innerHTML =
    marked(editor.getValue());
  
});

function insertBold()
{
  editor.insert("**Bold Text** ");
}
function insertItalic()
{
  editor.insert("*italicized text* ");
}
function insertLink()
{
  editor.insert("[title](https://www.example.com) ");
}
function insertQoute()
{
  editor.insert(`
  > blockquote   `);
}
function insertCode()
{
  editor.insert("`code` ");
}
function insertBullets()
{
  editor.insert(`
- First item
- Second item
- Third item  

`);
}
function insertNumList()
{
  editor.insert(`
1. First item
2. Second item
3. Third item 

`);
}

function insertHeading()
{

  editor.insert("#  add consequent  # to reduce size");
}
function insertHr()
{

  editor.insert(`
-------------------
`);
}
function insertUndo()
{
editor.undo();
}
function insertClear()
{
editor.setValue("");
}
function insertRedo()
{
editor.redo();
}


function dynamic_text() {
  var x = document.getElementById('md');
  var s= x.innerHTML;
  return s;
}

function download_file(name, contents, mime_type) {
  mime_type = mime_type || "text/html";

  var blob = new Blob([contents], { type: mime_type });

  var dlink = document.createElement("a");
  dlink.download = name;
  dlink.href = window.URL.createObjectURL(blob);
  dlink.onclick = function(e) {
    // revokeObjectURL needs a delay to work properly
    var that = this;
    setTimeout(function() {
      window.URL.revokeObjectURL(that.href);
    }, 1500);
  };

  dlink.click();
  dlink.remove();
}
