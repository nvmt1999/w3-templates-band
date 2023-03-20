// Ticket Model

function toggleTicketModel() {
    const modelSelect = document.querySelector(".ticket-surrounding");
    modelSelect.classList.toggle("hidden");
}

const modelContainerSelect = document.querySelector(".ticket-model");
modelContainerSelect.addEventListener('click', (event) => event.stopPropagation());

//Navigation Model

function displayNav() {
    const navSelect = document.querySelector(".toggle-items");
    navSelect.classList.toggle("hidden");
}

function afterClick() {
    const navSelect = document.querySelector(".toggle-items");
    navSelect.classList.add("hidden");
}

//Image Slide

let slideIndex = 0;
showSlide();
function showSlide() {
    let slides = document.getElementsByClassName("slider");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 1500);
}