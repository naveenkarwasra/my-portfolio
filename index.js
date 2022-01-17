
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
const themeLight = document.getElementById("theme-light-btn")
const themeDark = document.getElementById("theme-dark-btn")
let root = document.querySelector(":root")

function setTheme(themeName){
    localStorage.setItem("theme", themeName)
    document.documentElement.className = themeName
}

themeDark.addEventListener("click", () => {
    setTheme("dark-theme")    
})
themeLight.addEventListener("click", () => {
    setTheme(" ")    
})
if(localStorage.getItem("theme") === "dark-theme"){
    setTheme("dark-theme")
} else{
    setTheme(" ")
}
