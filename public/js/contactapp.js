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
    window.addEventListener("DOMContentLoaded", function() {
      // get the form elements defined in your form HTML above

      var form = document.getElementById("my-form");
      var button = document.getElementById("my-form-button");
      var status = document.getElementById("my-form-status");

      // Success and Error functions for after the form is submitted

      function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks, I'll get back to you soon!";
      }

      function error() {
        status.innerHTML = "Oops! There was a problem.";
      }

      // handle the form submission event

      form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
    });

    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
        } else {
          error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
  }

  // Error Ajax side
  // $("#formBlock").on("submit", function(e) {
  //   e.preventDefault();

  //   //get the name field value
  //   var name = $("#name").val();
  //   //get the name field value
  //   var email = $("#email").val();
  //   //get the message
  //   var message = $("#message").val();

  //   //send to formspree
  //   $.ajax({
  //     url: "https://formspree.io/xjvgrldv",
  //     method: "POST",
  //     data: {
  //       name: name,
  //       email: email,
  //       message: message
  //     },
  //     dataType: "json",
  //     success: function() {
  //       console.log("success");
  //       $("#contactForm").hide();
  //       $("#thankyouBlock").show();
  //     },
  //     error: () => {
  //       console.log("error")
  //     }
  //   });
  // });

});
