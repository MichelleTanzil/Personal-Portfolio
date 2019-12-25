$(document).ready(function() {
  // Nav Bar
  $(".toggle-nav").click(function(e) {
    $(this).toggleClass("active");
    var string = "☰";
    if ($(this).text() == "X")
      $(this)
        .text(string)
        .html();
    else $(this).text("X");

    $(".menu ul").toggleClass("active");
    $(".menu ul li").toggleClass("current-item");
    e.preventDefault();
  });
  // Collapsible heading
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      var text = content.nextElementSibling;
      if (content.style.display === "flex") {
        content.style.display = "none";
        text.style.display = "none";
        this.style.backgroundColor = "#0c0c18";
      } else {
        content.style.display = "flex";
        text.style.display = "flex";
        this.style.backgroundColor = "#5b9ed9";
      }
    });
  }
});
