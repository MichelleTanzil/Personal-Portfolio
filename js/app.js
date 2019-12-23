$(document).ready(function () {
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

  //Titles
  // List of sentences
  var _CONTENT = [
    "Full Stack Developer",
    "Web Developer",
    "Web Designer",
    "Gamer",
    "Nerd"
  ];

  // Current sentence being processed
  var _PART = 0;

  // Character number of the current sentence being processed
  var _PART_INDEX = 0;

  // Holds the handle returned from setInterval
  var _INTERVAL_VAL;

  // Element that holds the text
  var _ELEMENT = document.querySelector(".titles");

  // Cursor element
  var _CURSOR = document.querySelector(".cursor");

  // Implements typing effect
  function Type() {
    // Get substring with 1 characater added
    var titles = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = titles;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (titles === _CONTENT[_PART]) {
      // Hide the cursor
      _CURSOR.style.display = "none";

      clearInterval(_INTERVAL_VAL);
      setTimeout(function() {
        _INTERVAL_VAL = setInterval(Delete, 100);
      }, 1500);
    }
  }

  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    var titles = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = titles;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (titles === "") {
      clearInterval(_INTERVAL_VAL);

      // If current sentence was last then display the first one, else move to the next
      if (_PART == _CONTENT.length - 1) _PART = 0;
      else _PART++;

      _PART_INDEX = 0;

      // Start to display the next sentence after some time
      setTimeout(function() {
        _CURSOR.style.display = "inline-block";
        _INTERVAL_VAL = setInterval(Type, 150);
      }, 200);
    }
  }

  // Start the typing effect on load
  _INTERVAL_VAL = setInterval(Type, 125);

});
