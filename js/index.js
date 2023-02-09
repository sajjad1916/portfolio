window.addEventListener("load", function() {
    var textLines = [    "Developer",
                          "Fast Learner",
                          "Coder"  ];
    var delay = 20;
    var textContainer = document.getElementById("text");
    var index = 0;
    function writeLine() {
      var line = textLines[index];
      for (var i = 0; i < line.length; i++) {
        delay += 100;
        (function(i) {
          setTimeout(function() {
            textContainer.innerHTML += line[i];
          }, delay);
        })(i);
      }
      delay += 100;
      (function() {
        setTimeout(function() {
          clearLine();
        }, delay);
      })();
    }
    function clearLine() {
      var line = textLines[index];
      var words = line.split(" ");
      for (var i = 0; i < words.length; i++) {
        delay += 50;
        (function(i) {
          setTimeout(function() {
            textContainer.innerHTML = textContainer.innerHTML.replace(
              " " + words[words.length - 1 - i],
              ""
            );
            if (i === words.length - 1) {
              textContainer.innerHTML = "";
              index++;
              if (index === textLines.length) {
                index = 0;
              }
              writeLine();
            }
          }, delay);
        })(i);
      }
    }
    writeLine();
  });

  window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.body.classList.add("scrolling");
    } else {
      document.body.classList.remove("scrolling");
    }
  };