import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'

const transport = {
    auth: {
        api_key: process.env.API_KEY
    }
}

const mailer = nodemailer.createTransport(sendgridTransport(transport))

export default async (req, res) => {

    const {name, email, message} = req.body

    const data = {
        to: process.env.CONTACT_EMAIL,
        from: process.env.CONTACT_EMAIL,
        subject: "Portfolio message",
        text: message,
        html: `
            <b>From:</b> ${name} <br/>
            <b>Email:</b> ${email} <br/>
            <b>Message:</b> ${message}
        `
    }

    try {
        const response = await mailer.sendMail(data)
        console.log(response)
        res.status(200).send("Message sent!")
    } catch (error) {
        console.log(error)
        res.status(500).send("Error, try again later!")
    }

}