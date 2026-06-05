export function renderNavbar(items) {
    const container = document.querySelector(".container-nav");

    items.forEach((item) => {
        const div = document.createElement("div");

        div.classList.add("nav-items");
        div.textContent = item;

        container.appendChild(div);
    });
}