const showPopup = document.querySelector(".btn-nav-logout");
const popUpContainer = document.querySelector(".popUp-container");

showPopup.onclick = () => {
    popUpContainer.classList.add("active");
};
