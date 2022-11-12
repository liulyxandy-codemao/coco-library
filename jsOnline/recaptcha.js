var scriptElement = document.createElement("script")
scriptElement.setAttribute("src","https://js.hcaptcha.com/1/api.js?hl=zh-CN")
scriptElement.setAttribute("async","")
scriptElement.setAttribute("defer","")
document.getElementsByTagName("body")[0].append(scriptElement)

// DEBUG ONLY
var test = document.createElement("div")
test.setAttribute("id","h-captcha")
document.getElementsByTagName("body")[0].append(test)

var t = setInterval(()=>{
    if(hcaptcha){
        window.hcaptcha = hcaptcha;
        window.capid = hcaptcha.render('h-captcha',{sitekey:"1389c4ba-979e-4013-87b4-28b5bdf598d0"})
        clearInterval(t)
    }
},500)
