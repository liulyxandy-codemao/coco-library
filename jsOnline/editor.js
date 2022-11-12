/* heEditor one-step install */
/* by LiuLyxAndy */

// Editor Load
var v = document.createElement("script")
v.setAttribute("src","https://cdn.jsdelivr.net/gh/xwlrbh/HandyEditor@1.9.0/HandyEditor.min.js")
document.getElementsByTagName("body")[0].appendChild(v)

// Editor Main
var i=setInterval(function(){
    if(HE){
        window.loadEditor = (id) => {
            window.editor = HE.getEditor(id);
        }
        window.getHTML = () => {
            return window.editor.getHTML();
        }
        window.getText = () => {
            return window.editor.getText();
        }
        window.editorset = (text) => {
            return window.editor.set(text);
        }
        window.editorshow = () => {
            return window.editor.show();
        }
        clearInterval(i)}
    console.log(1)
},1000)



