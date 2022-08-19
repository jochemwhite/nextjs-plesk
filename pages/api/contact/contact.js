let { send_message } = require("../../../Server/Discord/Discord");
export default function (req, res) {
  let nodemailer = require("nodemailer");

  let name = `${req.body.firstname} ${req.body.lastname}`;
  let email = req.body.email;
  let product = req.body.product;
  let prioriteit = req.body.prioriteit;
  let message = req.body.message;

  console.log(prioriteit)

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
    subject: `nieuwe offerte van ${name}`,
    text: message + " | Sent from: " + email,
    html: `
    <div>
        <h1>Nieuwe Offerte</h1>
        <h4> Fakke zoomer Coen er is een nieuwe offerte binnengekomen via de website </h4>
        <div>
            <p>naam: ${name}</p>
            <p>product: ${product} </p>
            <p>email: ${email}</p>
            <p>Message: ${message}</p>
        </div>
    </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  send_message(name, email, product, prioriteit, message);

  res.send("success");
}
