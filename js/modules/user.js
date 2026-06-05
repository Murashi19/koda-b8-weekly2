export function updateUser(name) {
    const userName = document.querySelector(".container-icon .icon-items:nth-child(2) span");

    userName.textContent = name;
}