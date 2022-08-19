let { send_form } = require("../../../Server/Discord/Discord");
export default function (req, res) {
  let nodemailer = require("nodemailer");

  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.onderwerp;
  let message = req.body.message;

  console.log(name, email, subject, message)


  const transporter = nodemailer.createTransport({
    port: 465,
    host: "amrio.nl",
    auth: {
      user: "info@amrio.nl",
      pass: "@K2lWACJAf!N$%AHnqfZAgGpEQfIw!wnNWlzJBEBdYV9d0L9",
    },
    secure: true,
  });

  const mailData = {
    from: "info@amrio.nl",
    to: "info@amrio.nl",
    subject: `nieuwe contact form van ${name}`,
    text: message + " | Sent from: " + email,
    html: `
    <div>
        <h1>Nieuwe contact form</h1>
        <h4> er is een nieuw contact form binnengekomen via de https://amrio.nl/contact </h4>
        <div>
            <p>naam: ${name}</p>
            <p>email: ${email}</p>
            <p>Message: ${message}</p>
        </div>
    </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  send_form(name, email, subject, message);

  res.send("success");
}