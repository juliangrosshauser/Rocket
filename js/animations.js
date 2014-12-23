$(function() {
  $("h1").velocity("transition.bounceDownIn", { duration: 700, visibility: "visible", complete: function() {
    $("img").velocity("transition.fadeIn", { duration: 1000, visibility: "visible" });
    $("h2").velocity("transition.slideUpIn", { duration: 800, visibility: "visible" });
  }});
});
