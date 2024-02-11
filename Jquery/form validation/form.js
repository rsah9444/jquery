$(document).ready(function() {
  $('#myForm').submit(function(event) {
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    // Reset error messages
    $('#nameError').text('');
    $('#emailError').text('');
    $('#passwordError').text('');

    // Validate name field
    if (name == "") {
      $('#nameError').text('Please enter your name.');
      event.preventDefault();
    }
    // Validate email field
    if (email == "") {
    $('#emailError').text('Please enter your email.');
    event.preventDefault();
    } else {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if (!pattern.test(email)) {
    $('#emailError').text('Please enter a valid email address.');
    event.preventDefault();
    }
    }
  
    // Validate password field
    if (password == "") {
      $('#passwordError').text('Please enter a password.');
      event.preventDefault();
    } else if (password.length < 6) {
      $('#passwordError').text('Your password must be at least 6 characters long.');
      event.preventDefault();
    }
  });
});
   
