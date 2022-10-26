let skillsSec = document.querySelector(".skills");
let progItems = document.querySelectorAll(".skills .our-skills .prog-holder .prog span");
let statsSec = document.querySelector(".stats");
let allNums = document.querySelectorAll(".stats .num");
let check = true;

console.log(skillsSec);
console.log(progItems);

function generate(element) {
  let counter = setInterval(() => {
    element.textContent++;
    if (element.textContent === element.dataset.num) clearInterval(counter);
  }, 2000 / element.dataset.num)
}
let checkB = document.querySelector("header .check");
let nav = document.querySelector("header ul");
let head = document.querySelector("header");
let allLinks = document.querySelectorAll("header ul li a");

checkB.onclick = () => {
  nav.classList.toggle("open");
}
window.onscroll = () => {
  if (window.scrollY >= statsSec.offsetTop - 550) {
    if (check) allNums.forEach(item => generate(item));
    check = false;
  }
  if (window.scrollY >= skillsSec.offsetTop - 300) {
    console.log("Reavhed");
    progItems.forEach((item) => {
      item.style.width = item.dataset.width;
    })
  }


  if (window.scrollY >= 130) {
    head.style.backgroundColor = "#19c8fa";
  }
  else {
    head.style.backgroundColor = "transparent";
  }
}
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    allLinks.forEach(item => {
      item.classList.remove("active");
    })
    link.classList.add("active");
  })
})