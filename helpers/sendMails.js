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
            subject:"verifica tu cuenta",//asunto
            text:"confirme su cuenta",//texto del mail
            html:`<p>hola ${name} has click en el enlace para activar tu cuenta <a href="${process.env.URL_FRONT}/confirm/${token}">${process.env.URL_FRONT}/confirm/${token}</a> </p>`
        })
    },
    forgotPassword: async (data)=>{

        const{name, email, token}=data

        await transport.sendMail({
            from: "axell.bustos@hotmail.com.ar",//de donde
            to: email,//para quien
            subject:"reestablece tu contraseña",//asunto
            text:"reestablesca su contraseña",//texto del mail
            html:`<p>hola ${name} has click en el enlace para recuperar tu contraseña <a href="${process.env.URL_FRONT}/confirm/${token}">${process.env.URL_FRONT}/resetPassword/${token}</a> </p>`
        })
    }
}