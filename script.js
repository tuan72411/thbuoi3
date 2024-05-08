
// JavaScript code to handle form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from form fields
    var firstName = document.getElementsByName('firstname')[0].value;
    var surname = document.getElementsByName('surname')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var password = document.getElementsByName('password')[0].value;
    var day = document.getElementsByName('birthday_day')[0].value;
    var month = document.getElementsByName('birthday_month')[0].value;
    var year = document.getElementsByName('birthday_year')[0].value;

    // You can perform further validation or processing here

    // Example: Log the values to the console
    console.log('First Name:', firstName);
    console.log('Surname:', surname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Birthday:', day + '/' + month + '/' + year);

    // Here you can send the form data to your server for further processing
});
