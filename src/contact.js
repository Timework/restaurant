const contact = () => {
    // The holding div
    let content = document.getElementById("content");

    // Make title
    let title = document.createElement("h1");
    title.innerHTML = "Contact Us";

    // Make phone number
    let phone= document.createElement("h2");
    phone.innerHTML = "Phone #(999)-999-9999";

    // Make email
    let email = document.createElement("h2");
    email.innerHTML = "Email example@example.com";

    // Appending elements
    content.appendChild(title);
    content.appendChild(phone);
    content.appendChild(email);

}
export { contact }