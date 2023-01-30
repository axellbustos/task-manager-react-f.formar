const nodemailer=require("nodemailer")
const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
module.exports={
    confirmRegister: async (data)=>{

        const{name, email, token}=data

        await transport.sendMail({
            from: "axell.bustos@hotmail.com.ar",//de donde
            to: email,//para quien
            subjet:"verifica tu cuenta",//asunto
            text:"confirme su cuenta",//texto del mail
            html:`<p>hola ${name} has click en el enlace para activar tu cuenta <a href="${process.env.URL_FRONT}/confirm/${token}"></a> </p>`
        })
    } 
}