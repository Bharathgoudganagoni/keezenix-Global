const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// File upload
const upload = multer({ dest: "uploads/" });

// Email config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "22641a05d9@vaagdevi.edu.in",        // ✅ your email
    pass: "ngeyyhpukkyyooev"            // ✅ app password (no spaces)
  }
});

// API
app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const file = req.file;

    await transporter.sendMail({
      from: `"Keezenix Careers" <yourmail@gmail.com>`,  // ✅ comma here
      to: "22641a05d9@vaagdevi.edu.in",                  // ✅ real email

      subject: `New Job Application - ${name}`,        // ✅ comma here

      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <p>Hi Sir,</p>

          <p>You have received a new job application.</p>

          <h3>Candidate Details:</h3>
          <ul>
            <li><b>Name:</b> ${name}</li>
            <li><b>Email:</b> ${email}</li>
            <li><b>Phone:</b> ${phone}</li>
          </ul>

          <h3>Message:</h3>
          <p>${message}</p>

          <p>Resume is attached below.</p>

          <br/>
          <p>Regards,<br/>Keezenix Careers Portal</p>
        </div>
      `,  // ✅ comma here

      attachments: [
        {
          filename: file.originalname,
          path: file.path
        }
      ]
    });

    res.send("Application sent successfully");

  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending application");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));