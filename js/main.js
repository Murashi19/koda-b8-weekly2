import { updateUser } from "./modules/user.js";
import { createCartBadge } from "./modules/cart.js";
import { initSearch } from "./modules/search.js";
import { renderCategories } from "./modules/category.js";
import { renderNavbar } from "./modules/navbar.js";

import { navbarItems } from "./data/navbar.js";
import { categories } from "./data/categories.js";

updateUser("Rafli");
createCartBadge(3);

initSearch();

renderNavbar(navbarItems)
renderCategories(categories);