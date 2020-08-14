const menu = () => {
    // The holding div
    let content = document.getElementById("content");
    let foodx = document.createElement("card");
    let foody = document.createElement("card");
    let foodz = document.createElement("card");
    let food = [foodx, foody, foodz];

    // Make image
    let imagex = document.createElement("img");
    imagex.src = "assets/food-1.jpg";
    let imagey = document.createElement("img");
    imagey.src = "assets/food-2.jpg";
    let imagez = document.createElement("img");
    imagez.src = "assets/food-3.jpg";
    let images = [imagex, imagey, imagez];

    // Append Title
    let maintitle = document.createElement("h1");
    maintitle.innerHTML = "MENU";
    content.appendChild(maintitle);



    // Appending elements
    for (let i = 0; i < food.length; i++){
        let holder = food[i]
        holder.appendChild(images[i]);
        let wordholder = document.createElement("div");
        let title = document.createElement("h1");
        title.innerHTML = "Food name placeholder";
        let description = document.createElement("p");
        description.innerHTML = "The best food that can be yours.";
        wordholder.appendChild(title);
        wordholder.appendChild(description);
        holder.appendChild(wordholder);
        content.appendChild(holder);
    }
}
export { menu }