// When the user scrolls down 20px from the top of the document, add background color
// When the user scrolls to the top of the page, remove background color

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("nav-bar").classList.add("color");
      document.getElementById("links").classList.add("link-color");
  
    } else {
      document.getElementById("nav-bar").style.top = "0px";
      document.getElementById("nav-bar").classList.remove("color");
    }
  }