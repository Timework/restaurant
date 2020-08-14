const front = () => {
    // The holding div
    let content = document.getElementById("content");

    // Make title
    let title = document.createElement("h1");
    title.innerHTML = "Restaurant Default";

    // Make image
    let image = document.createElement("img")
    image.src = "assets/rest.jpg";
    image.classList.add("content-img")

    // Make headline
    let headline = document.createElement("h2");
    headline.innerHTML = "This place is great";

    // Make text
    let text = document.createElement("p");
    text.innerHTML = "I always dreamed at eating at this great place.";

    // Appending elements
    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(text);
}
export { front }