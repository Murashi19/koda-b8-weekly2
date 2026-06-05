import { updateUser } from "./modules/user.js";
import { renderCategories } from "./modules/category.js";
import { renderNavbar } from "./modules/navbar.js";

import { navbarItems } from "./data/navbar.js";
import { categories } from "./data/categories.js";

updateUser("Rafli");


renderNavbar(navbarItems)
renderCategories(categories);