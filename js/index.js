let navLinks = document.querySelectorAll(".nav-link")

for (let i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    navLinks[i].style.color = "red";
  })
}


let navContainer = document.querySelector(".nav-container")
console.log(navContainer)

navContainer.addEventListener("click", () => {
  navContainer.style.backgroundColor = "salmon"
})


let paragraphs = document.querySelectorAll("p")

for (let i = 0; i < paragraphs.length; i++){
  paragraphs[i].addEventListener("mouseover", (event) => {
    paragraphs[i].style.color = "blue";
  })
}


let webPage = document.querySelector('body')

webPage.addEventListener("wheel", (event) => {
  if (webPage.style.backgroundColor === "white"){
    webPage.style.backgroundColor = "pink"
  } else {
    webPage.style.backgroundColor = "white"
  }
  console.log(webPage.style.backgroundColor)
})


let logo = document.querySelector(".logo-heading")

logo.addEventListener("mouseenter", (event) =>{
  event.preventDefault();
  logo.classList.toggle("logoAlt")
})


let headImg = document.querySelector(".intro img")

headImg.addEventListener("drag", (event) => {
  headImg.style.height = "100px"
})


let buttons = document.querySelectorAll(".btn")

buttons[0].addEventListener("dblclick", (event) => {
  buttons[0].style.backgroundColor = "black"
})

buttons[1].addEventListener("copy", () => {
  buttons[1].style.backgroundColor = "yellow"
  buttons[1].style.color = "black"
})

buttons[2].addEventListener("contextmenu", () => {
  buttons[2].style.backgroundColor = "orange"
})


let destinationImg = document.querySelector(".content-destination img")

destinationImg.addEventListener("mouseleave", () => {
  destinationImg.style.borderRadius = "100px"
})


let mapImg = document.querySelector(".img-content img")

mapImg.addEventListener("auxclick", () => {
  mapImg.classList.add("contentEvent")
})