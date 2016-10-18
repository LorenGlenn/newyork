$(function(){
  $(".hideable").click(function() {
    $("#image").fadeToggle();
    $(".unhide").toggle();
    $("#resize").toggle();
  });
  $("button#big").click(function() {
    $("#image").removeClass();
    $("#image").addClass("large");
  });
  $("button#medium").click(function() {
    $("#image").removeClass();
    $("#image").addClass("middle");
  });
  $("button#small").click(function() {
    $("#image").removeClass();
    $("#image").addClass("little");
  });
});
