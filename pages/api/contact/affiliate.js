export default function (req, res) {
  let nodemailer = require("nodemailer");

  let name = req.body.name;
  let email = req.body.email;
  let country = req.body.country;
  let discord = req.body.discord;
  let platform = req.body.platform;
  let link = req.body.discord;
  let message = req.body.message;

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
    subject: `New affiliate application`,
    html: `
    <div>
        <h1>New affiliate application</h1>
        <h4>Dear Amrio, the system just got a new affiliate application</h4>
        <div>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Country: ${country}</p>
            <p>Discord: ${discord} </p>
            <p>Platform: ${platform}</p>
            <p>Link: ${link}</p>
            <p>Message: ${message}</p>
        </div>
    </div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send("success");
}
