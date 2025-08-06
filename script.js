document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_avca33v", "template_8c4w1rw", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
    alert('✅ Message sent successfully! I will contact you soon.');
    document.getElementById('contact-form').reset();
  }, function(error) {
    alert('❌ Failed to send message. Please try again later.');
    console.error(error);
  });
});
