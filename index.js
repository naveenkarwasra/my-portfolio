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
})