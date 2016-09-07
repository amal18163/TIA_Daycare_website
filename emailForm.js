/*
FILE NAME: contact.js
WRITTEN BY: Yuanzhen Pan
DATE: April 15th 2016
PURPOSE: create functions for email form. This file contains the javaScript
functions for creating an email form using Ajax. Once the users fill
in their contact information and message/inquiry. Upon clicking the button
submit, they can send an email directly to the designated email adress.
*/


$("#submit_message").click(sendEmail);

//function that generate an email and send it to the designated email address
function sendEmail() {
  var url = 'http://cs.wellesley.edu/~ypan/mail-form/mailto_ypan_at_wellesley_edu.php';
  var date = new Date();
  var date = new Date();
  var name     = $('#name').val();
  var email    = $('#email').val();
  var message = $('#message').val();

  //if the user forgets to fill in any information, send an alert to remind him/her
  if (name == ""||email == ""||message== "") {
    alert("Please fill in all required information!");
  //if all information is complete, send the email to designated email address
  }else{
    var message = "Message sent by " + name + " (" + email + ") " + "on " + date + "\n"+ message;
    var what = {'from_name': name ,
              'from_email': email,
              'subject': "Inquiry about TIA Daycare",
              'body': message};
    $.post(url, what, orderResponse, 'json');
  }
}


function orderResponse(responseObj) {
  console.log("yo status: " + responseObj.status);
    if(responseObj.status == "ok" ) {
        console.log("status: " + responseObj.status);
        $("#results").html("Message sent!").css("color", "green");
    } else {
        console.log("status: " + responseObj.status);
        $("#results").html("The message was not sent successfully").css("color", "red");
   }
}
