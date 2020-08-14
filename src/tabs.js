import { front } from './front.js';
import { contact } from './contact.js';
import { menu } from './menu.js';

const clear = () => {
    let content = document.getElementById("content");
    while (content.firstChild){
        content.removeChild(content.lastChild);
    }
}

const tabs = () => {
    // Container
    let content = document.getElementById("content");

    // Make button holder
    let tabholder = document.createElement("div");
    tabholder.classList.add("top-right");

    // Make home button
    let home = document.createElement("button");
    home.innerHTML = "Home";
    home.addEventListener("click", home_button);

    // Make contact button
    let contact_b = document.createElement("button");
    contact_b.innerHTML = "Contact";
    contact_b.addEventListener("click", contact_button);

    // Make menu button
    let menu_b = document.createElement("button");
    menu_b.innerHTML = "Menu";
    menu_b.addEventListener("click", menu_button);

    // Appending buttons
    tabholder.appendChild(home);
    tabholder.appendChild(contact_b);
    tabholder.appendChild(menu_b);
    content.appendChild(tabholder);
}

// Home button command
const home_button = () => {
    clear();
    tabs();
    front();
}

// Contact button command
const contact_button = () => {
    clear();
    tabs();
    contact();
}

// Menu button command
const menu_button = () => {
    clear();
    tabs();
    menu();
}

export { tabs }