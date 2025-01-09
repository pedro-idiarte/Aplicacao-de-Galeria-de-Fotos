const gallery = document.querySelector(".photo-grid");
const searchInput = document.getElementById("search");
const noResultsMessage = document.getElementById("no-results");
const themeToggleButton = document.getElementById("theme-toggle");

const photos = [
    { id: 1, name: "Paisagem", src: "images/photo1.jpg" },
    { id: 2, name: "Cidade", src: "images/photo2.jpg" },
    { id: 3, name: "Montanha", src: "images/photo3.jpg" },
    { id: 4, name: "Mar", src: "images/photo4.jpg" },
    { id: 5, name: "Floresta", src: "images/photo5.jpg" },
    { id: 6, name: "Deserto", src: "images/photo6.jpg" },
    { id: 7, name: "Aurora", src: "images/photo7.jpg" },
    { id: 8, name: "Neve", src: "images/photo8.jpg" },
    { id: 9, name: "Cachoeira", src: "images/photo9.jpg" },
    { id: 10, name: "Pôr do Sol", src: "images/photo10.jpg" },
];

function loadGallery(filter = "") {
    gallery.innerHTML = "";
    const filteredPhotos = photos.filter(photo =>
        photo.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredPhotos.length === 0) {
        noResultsMessage.classList.remove("hidden");
    } else {
        noResultsMessage.classList.add("hidden");
        filteredPhotos.forEach(photo => {
            const photoCard = document.createElement("div");
            photoCard.classList.add("photo-card");
            photoCard.innerHTML = `
                <img src="${photo.src}" alt="${photo.name}">
                <p>${photo.name}</p>
            `;
            gallery.appendChild(photoCard);
        });
    }
}

searchInput.addEventListener("input", () => {
    loadGallery(searchInput.value);
});

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "☀️ Light Mode";
    } else {
        themeToggleButton.textContent = "🌙 Dark Mode";
    }
});

loadGallery();
