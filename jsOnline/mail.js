var element_ = document.createElement("script")
element_.setAttribute("src","https://cdn.jsdelivr.net/npm/nodemailer@6.8.0/lib/nodemailer.js")
document.getElementsByTagName("body")[0].appendChild(element_)

setInterval(()=>{
  try{
window.sendMailNow = async function(touser,textmail,subject) {
            var user = 'cocopublicmail@163.com'
            var pwd = 'JDVIQKFKHKRRVCNC'
            var to = touser
            var text = textmail
            var ms = subject
            let transporter = nodemailer.createTransport({
                host: 'smtp.163.com',
                port: 587,
                secure: false,
                auth: {
                    user: user,
                    pass: pass
                }
            })
            let info = await transporter.sendMail({
                from: `发送人<${user}>`,
                to: `接收人<${to}>`,
                subject: subject,
                text: text
            })
}}catch(e){}},300)
