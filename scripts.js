function toggleImage(animal) {
    const img = document.getElementById(animal);
    if (img.style.display === "none" || img.style.display === "") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}