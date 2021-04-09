const menuBtn = document.querySelector(".menu-btn");
const menuBtnSlide = document.querySelector(".menu-btn-slide");

let menuOpen = false;
let menuOpenSlide = false;

//burger menu
menuBtn.addEventListener("click", function openSlideMenu() {
  document.getElementById("menu").style.width = "100%";
  // document.getElementById("content").style.marginLeft = "100vw";
  if (menuOpenSlide) {
    menuBtnSlide.classList.remove("open");
    menuBtn.classList.remove("open");
    menuOpenSlide = false;
    menuOpen = false;
  } else {
    menuBtnSlide.classList.add("open");
    // menuBtn.classList.add("open");
    menuOpenSlide = true;
    menuOpen = true;
    document.getElementById("menu-btn").style.display = "none";
  }
  //    disableWindowScroll();
});

menuBtnSlide.addEventListener("click", function closeSlideMenu() {
  document.getElementById("menu").style.width = "0";
  // document.getElementById("content").style.marginLeft = "0";
  if (menuOpenSlide) {
    menuBtnSlide.classList.remove("open");
    menuBtn.classList.remove("open");
    menuOpenSlide = false;
    document.getElementById("menu-btn").style.display = "flex";
  }
  //    enableWindowScroll();
});

//navigate to section and close menu
// let navLinkB = document.getElementById("nav_item_b");

// navLinkB.addEventListener("click", function () {
//    if ((navSlide.display = "block")) {
//       document.getElementById("menu").style.width = "100%";
//       // document.getElementById("content").style.marginLeft = "0";
//    } else if ((navSlide.display = "flex")) {
//       document.getElementById("menu").style.width = "0%";
//    }
// });

// slideshow
let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
  showSlide((slideIndex += n));
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function showSlide(n) {
  let i;
  let slide = document.getElementsByClassName("cite");
  let dot = document.getElementsByClassName("dot");

  if (n > slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace("active", "");
  }
  slide[slideIndex - 1].style.display = "block";
  dot[slideIndex - 1].className += " active";
}

//media query
const mediaQuery = window.matchMedia("(min-width: 768px)");

mediaQuery.addListener(handleWindowChange);

function handleWindowChange(e) {
  if (e.matches) {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menu-btn").style.display = "none";
  } else {
    document.getElementById("menu-btn").style.display = "flex";
    document.getElementById("menu").style.width = "0%";
  }
}

// Run it initially
handleWindowChange(mediaQuery);

//window scroll enable/disable
var winX = null;
var winY = null;
window.addEventListener("scroll", function () {
  if (winX !== null && winY !== null) {
    window.scrollTo(winX, winY);
  }
});

function disableWindowScroll() {
  winX = window.scrollX;
  winY = window.scrollY;
}
function enableWindowScroll() {
  winX = null;
  winY = null;
}
