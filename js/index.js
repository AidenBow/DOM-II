let navLinks = document.querySelectorAll(".nav-link")
console.log(navLinks)

for (let i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", (event) => {
    console.log(event)
    event.preventDefault();
    navLinks[i].style.color = 'red';
    navLinks[i].style.fontSize += 1;
    console.log(navLinks[i].style.fontSize)
  })
}

let paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

for (let i = 0; i < paragraphs.length; i++){
  paragraphs[i].addEventListener('mouseover', (event) => {
    paragraphs[i].style.color = 'blue';
  })
}

let webPage = document.querySelector('body')
console.log(webPage)

webPage.addEventListener("wheel", (event) => {
  console.log(webPage.style.backgroundColor)
  if (webPage.style.backgroundColor === "white"){
    webPage.style.backgroundColor = "pink"
  } else {
    webPage.style.backgroundColor = "white"
  }
})

let logo = document.querySelector(".logo-heading")
console.log(logo)

logo.addEventListener("mouseenter", (event) =>{
  event.preventDefault();
  logo.classList.toggle('logoAlt')
})

