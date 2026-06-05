export function renderCategories(categories) {
    const container = document.querySelector(
        ".container-categories-bottom"
    );

    container.innerHTML = "";

    categories.forEach((category) => {
        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("link-items-categories");
        link.dataset.id = category.id;
        link.dataset.slug = category.slug;

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("bg-img-items");

        const image = document.createElement("img");
        image.src = category.image;
        image.alt = category.name;

        const title = document.createElement("h3");
        title.textContent = category.name;

        const totalProduct = document.createElement("p");
        totalProduct.classList.add("total-product");
        totalProduct.textContent = `${category.totalProduct} Produk`;

        imageWrapper.appendChild(image);

        link.append(
            imageWrapper,
            title,
            totalProduct
        );

        li.appendChild(link);

        container.appendChild(li);
    });
}