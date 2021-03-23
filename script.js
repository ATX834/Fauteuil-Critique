/* ---------------------- Disco mode ---------------------*/
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "disco") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "disco");
    localStorage.setItem("theme", "disco");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
/* ---------------------- Disco mode ---------------------*/

/* ---------------------- Reviews clicks ---------------------*/

const cat1 = document.querySelector(".cat-1");
const cat2 = document.querySelector(".cat-2");
const cat3 = document.querySelector(".cat-3");
const cat4 = document.querySelector(".cat-4");

// const icon1 = document.getElementById('reviews-button1');
// const icon2 = document.getElementById('reviews-button2');
// const icon3 = document.getElementById('reviews-button3');

// console.log(cat1, cat2, cat3, icon1, icon2, icon3);

function reviewclick(e) {
  if (e === "all") {
    cat1.classList.remove("hidden");
    cat2.classList.remove("hidden");
    cat3.classList.remove("hidden");
    cat4.classList.remove("hidden");
    // icon1.classList.remove("selected");
    // icon2.classList.remove("selected");
    // icon3.classList.remove("selected");
  } else if (e === "videogame") {
    cat1.classList.remove("hidden");
    cat2.classList.add("hidden");
    cat3.classList.add("hidden");
    cat4.classList.add("hidden");
    // icon1.classList.add("selected");
    // icon2.classList.remove("selected");
    // icon3.classList.remove("selected");
  } else if (e === "film") {
    cat1.classList.add("hidden");
    cat2.classList.remove("hidden");
    cat3.classList.add("hidden");
    cat4.classList.add("hidden");

    // icon1.classList.remove("selected");
    // icon2.classList.add("selected");
    // icon3.classList.remove("selected");
  } else if (e === "book") {
    cat1.classList.add("hidden");
    cat2.classList.add("hidden");
    cat3.classList.remove("hidden");
    cat4.classList.add("hidden");
  }
    else if (e === "music") {
    cat1.classList.add("hidden");
    cat2.classList.add("hidden");
    cat3.classList.add("hidden");
    cat4.classList.remove("hidden");
    // icon1.classList.remove("selected");
    // icon2.classList.remove("selected");
    // icon3.classList.add("selected");
  } else {
    cat1.classList.add("hidden");
    cat2.classList.add("hidden");
    cat3.classList.add("hidden");
  }
}

/* ---------------------- Reviews clicks ---------------------*/
/* ---------------- Apparition review ---------------------- */
function discoverReview(e) {
  if (e === "all") {
    cat1.classList.remove("hidden");
    cat2.classList.remove("hidden");
    cat3.classList.remove("hidden");
    cat4.classList.remove("hidden");
    // icon1.classList.remove("selected");
    // icon2.classList.remove("selected");
    // icon3.classList.remove("selected");
  } else if (e === "videogame") {
    cat1.classList.remove("hidden");
    cat2.classList.add("hidden");
    cat3.classList.add("hidden");
    cat4.classList.add("hidden");
    // icon1.classList.add("selected");
    // icon2.classList.remove("selected");
    // icon3.classList.remove("selected");
  } else if (e === "film") {
    cat1.classList.add("hidden");
    cat2.classList.remove("hidden");
    cat3.classList.add("hidden");
    cat4.classList.add("hidden");

    // icon1.classList.remove("selected");
    // icon2.classList.add("selected");
    // icon3.classList.remove("selected");
  } else if (e === "book") {
    cat1.classList.add("hidden");
    cat2.classList.add("hidden");
    cat3.classList.remove("hidden");
    cat4.classList.add("hidden");
  }
    else if (e === "music") {
    cat1.classList.add("hidden");
    cat2.classList.add("hidden");
    cat3.classList.add("hidden");
    cat4.classList.remove("hidden");
    // icon1.classList.remove("selected");
    // icon2.classList.remove("selected");
    // icon3.classList.add("selected");
  } else {
    cat1.classList.add("hidden");
    cat2.classList.add("hidden");
    cat3.classList.add("hidden");
  }
}
/* ---------------- Apparition review ---------------------- */
/* ---------------------- Burger menu ------------------------*/

const menuActivate = document.querySelector(".navbar-list");
let isMenuActivated = false;

function openMenu() {
  if (isMenuActivated === false) {
    isMenuActivated = true;
    menuActivate.classList.add('navbar-open');
  } else {
    isMenuActivated = false;
    menuActivate.classList.remove('navbar-open');
  }
}

/* ---------------------- Burger menu ------------------------*/
