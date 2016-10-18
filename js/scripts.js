$("document").ready(function() {
  $(".hideable").click(function() {
    $("#image").fadeToggle();
    $(".show").toggle();
  });
});
