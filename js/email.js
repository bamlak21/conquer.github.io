function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bamlakgezahegn26@gmail.com",
        Password : "7F70BD1770CC690A9F3BAA50451A38C9E684",
        To : 'conquer.creativeagency@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent sucessfully")
    );
};