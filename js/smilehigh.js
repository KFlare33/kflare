$(document).ready(function() {
    //when home clicked show home  and hide others
    $("#a_home").click(function() {
      $("#home").removeClass("hidden");
      $("#contact").addClass("hidden");
      $("#about").addClass("hidden");
    });
  
    $("#aContact").click(function() {
      $("#contact").removeClass("hidden");
      $("#home").addClass("hidden");
      $("#about").addClass("hidden");
    });
  
    $("#a_about").click(function() {
      $("#about").removeClass("hidden");
      $("#home").addClass("hidden");
      $("#contact").addClass("hidden");
    });
  });
  