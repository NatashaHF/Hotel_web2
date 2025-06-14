

var slideIndex = 0;
showSlides(slideIndex);
var slide = document.getElementsByClassName("photoSlides");

function showSlides(n) {
        var i;
        var slide = document.getElementsByClassName("photoSlides");
        var dots = document.getElementsByClassName("dot");

        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slide[n].style.display = "block"; 
        dots[n].className += " active";
        slideIndex = n;
}

function plusSlides(n) {

    slideIndex += n;

    if (slideIndex >= slide.length - 1) {
      slideIndex = 0;
    
    } 
    
    if (slideIndex == -1){
      slideIndex = slide.length -1;

    }
    console.log("n:%d",n);
    console.log("slide index:%d",slideIndex);

    showSlides(slideIndex);
  }
  
function currentSlide(n) {
  if (n <= 0) {slideIndex = 0} 
    showSlides(slideIndex += n);
  }


//Get the button
var topbutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







