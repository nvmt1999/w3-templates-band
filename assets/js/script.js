function toggleTicketModel() {
    const modelSelect = document.querySelector(".ticket-surrounding");
    modelSelect.classList.toggle("hidden");
}

const modelContainerSelect = document.querySelector(".ticket-model");
modelContainerSelect.addEventListener('click', (event) => event.stopPropagation());

function displayNav() {
    const navSelect = document.querySelector(".toggle-items");
    navSelect.classList.toggle("hidden");
}