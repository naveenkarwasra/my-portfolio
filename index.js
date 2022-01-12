
const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav-link")
navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
})
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
})

const formContainer = document.getElementById("form-container")
const formSubmitBtn = document.getElementById("input-btn")
formSubmitBtn.addEventListener("click", () => {
    formContainer.textContent = "Thank you for contact. I will get back to you soon!"
    formContainer.classList.add("form-submit-text")
})
const themeToggle = document.getElementById("theme")
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-open")
    
})
const themeLight = document.getElementById("theme-light")
const themeDark = document.getElementById("theme-dark")
let root = document.querySelector(":root")


themeDark.addEventListener("click", () => {
    document.body.classList.add("dark-theme")
    
})
themeLight.addEventListener("click", () => {
    document.body.classList.remove("dark-theme")
})

