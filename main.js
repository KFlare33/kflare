$(document).ready(function(){
  
  //when home clicked show home  and hide others
  $("#a_resume").click(function() {
    $("#resume").removeClass("hidden");
    $("#projects").addClass("hidden");
    $("#contact").addClass("hidden");
  })
//when projects clicked show projects and hide home and hide contact
  $("#a_projects").click(function(){
     $("#projects").removeClass("hidden");
    $("#resume").addClass("hidden");
    $("#contact").addClass("hidden");
  })
  //when contact clicked show contact and hide home and hide projects
  $("#a_contact").click(function(){
    $("#contact").removeClass("hidden");
    $("#resume").addClass("hidden");
    $("#projects").addClass("hidden");
  })  
//when footer contact clicked show contact and hide home and hide projects
  $("#f_contact").click(function(){
    $("#contact").removeClass("hidden");
    $("#resume").addClass("hidden");
    $("#projects").addClass("hidden");
  }) 
//when footer back to top is clicked scroll back to the top
$("#f_top").click(function(){
  $('html, body').animate({scrollTop: 0}, 800);
})
$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '') {
alert("Please Fill Required Fields");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("main.php", {
name1: name,
email1: email,
message1: message
}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Thank you for your interest. I will respond soon!") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
});
  
})