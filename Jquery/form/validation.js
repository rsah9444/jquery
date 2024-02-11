$(document).ready(function() {
  // attach a submit event handler to the form
  $("#myForm").submit(function(event) {
    // prevent the form from submitting
    event.preventDefault();

    // get the input values
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();

    // validate the inputs
    if (name === "" || email === "" || password === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    // if all inputs are valid, submit the form
    alert("Form submitted successfully.");
    $("#myForm").unbind("submit").submit();
  });

  // validate email address format
  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
});
