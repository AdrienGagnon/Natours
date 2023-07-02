const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // 1) Create a transporter
    console.log(
        process.env.EMAIL_PASSWORD,
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT
    );
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
        // Activate in gmail 'less secure app' option
    });

    // 2) Define the email options
    const mailOptions = {
        from: 'Adrien Gagnon <hello@admin.io>',
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
