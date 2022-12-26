/* tinyEditor one-step install */
/* by LiuLyxAndy */

// Editor Load
var v = document.createElement("script")
v.setAttribute("src","https://cdn.tiny.cloud/1/7qgj71g0z3sd3jyvrzda07h5ig9080ol68v1znh908rzveiw/tinymce/6/tinymce.min.js")
document.getElementsByTagName("body")[0].appendChild(v)

var q=true
while(q){
  try{
    tinymce.init({
      selector: 'textarea#default-editor'
      
    });
    q=false;
  }catch(e){
  console.log(e)
  }
}
