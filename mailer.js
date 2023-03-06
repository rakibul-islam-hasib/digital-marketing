const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sgTransport({
    auth: {
        // Update your sendgrid API key here
        api_key: '...'
    }
}))

const send = ({ name, email, phone, subject, text }) => {

    const textBody = `Name: ${name}   
                Subject: ${subject}             
                Email: ${email}
                Phone: ${phone}
                Body: ${text}
                `

    const from = name && email ? `${name} <${email}>` : `${name || email}`

    const message = {
        from,
        // Update your email here
        to: 'example@gmail.com',
        subject: subject,
        text: textBody,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

module.exports = send