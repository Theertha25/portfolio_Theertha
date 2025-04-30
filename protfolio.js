
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('open');
});

// Optional: Auto-close when a menu item is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('open');
  });
  
});
const typed = new Typed('.multiple-text', {
    strings: ['Front-end Developer', 'Web Developer','Python Full Stack Developer'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay:1200,
    loop:true,
});



// form validation
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log('Form Data:', req.body);
  res.send('Form submitted successfully!');
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        subject: form.subject.value,
        message: form.message.value,
    };
    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
    if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
    } else {
        alert("Failed to send message.");
    }
});


