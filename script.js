/* ---------------------- Disco mode ---------------------*/

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
const nMode = document.getElementById('N-mode');

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
    nMode.innerHTML = 'Basic';

  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    nMode.innerHTML = 'Night';
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

/* ---------------------- Disco mode ---------------------*/

/* ---------------------- Reviews clicks ---------------------*/

function reviewclick(e) {
const cat1 = document.querySelector(".cat-1");
const cat2 = document.querySelector(".cat-2");
const cat3 = document.querySelector(".cat-3");

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

function getOnlyOneReview(x)
{

        const chosenReview = document.querySelector(x);
        if(chosenReview.classList[1] === "hidden")
        {
          chosenReview.classList.remove("hidden");
        }
        else
        {
          chosenReview.classList.add("hidden");
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
  
/* ---------------------- Transitions ------------------------*/
  
function init() {
  document.querySelectorAll('.select-review').forEach(element => {
    element.addEventListener('click', e => {
      reviewclick(e.target.dataset.category);
})
  });
}
init();
const swup = new Swup();
swup.on('contentReplaced', init);

/* ---------------------- Transitions ------------------------*/
