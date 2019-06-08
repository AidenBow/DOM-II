let navLinks = document.querySelectorAll(".nav-link")
console.log(navLinks)


for ( let i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", (event) => {
    console.log(event)
    event.preventDefault();
    navLinks[i].style.color = 'red';
    navLinks[i].style.fontSize += 1;
    console.log(navLinks[i].style.fontSize)
  })
}

let paragraphs = document.querySelector("p")
console.log(paragraphs)

paragraphs.addEventListener('mouseover', (event) => {
  paragraphs.style.color = 'red';
})

let webPage = document.querySelector('body')
console.log(webPage)

webPage.addEventListener("wheel", (event) => {
  console.log(webPage.style.backgroundColor)
  webPage.style.backgroundColor = "red"
})

