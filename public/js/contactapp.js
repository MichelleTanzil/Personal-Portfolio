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

  $("#formBlock").on("submit", function(e) {
    e.preventDefault();

    //get the name field value
    var name = $("#name").val();
    //get the name field value
    var email = $("#email").val();
    //get the message
    var message = $("#message").val();
    console.log("name: ", name, "email: ", email, "message: ", message);
    //send to formspree
    $.ajax({
      url: "https://formspree.io/xjvgrldv",
      method: "POST",
      data: {
        name: name,
        email: email,
        message: message
      },
      dataType: "json",
      success: function() {
        console.log("success");
        $("#contactForm").hide();
        $("#thankYouBlock").show();
      },
      error: () => {
        console.log("error");
      }
    });
  });
});
