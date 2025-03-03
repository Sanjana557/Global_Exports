let index = 0;

// Array of images and text
const slides = [
    {
        image: "hamburg-6849995_960_720.jpg",
        subtitle: "WELCOME TO",
        title: "YCR GLOBAL EXPORTS"
    },
    {
        image: "third_image.jpg",
        subtitle: "WE ARE HERE TO EXPORT",
        title: "ARECA LEAF PLATES"
    },
    {
        image: "bagasse1.jpg",
        subtitle: "WE ARE HERE TO EXPORT",
        title: "SUGARCANE BAGASSE PLATES"
    },
    {
        image: "HANDICRAFT.jpg",
        subtitle: "WE ARE HERE TO EXPORT",
        title: "HANDICRAFT PRODUCTS"
    },
    {
        image: "POLY_BAGS.jpg",
        subtitle: "WE ARE HERE TO EXPORT",
        title: "POLY BAGS"
    },
    {
        image: "BAMBOO.jpg",
        subtitle: "WE ARE HERE TO EXPORT",
        title: "BAMBOO PRODUCTS"
    },
    {
        image: "coconut-43_640.webp",
        subtitle: "WE ARE HERE TO EXPORT",
        title: "COCONUT PRODUCTS"
    }, 
    {
        image: "PET_SHEETS.jpg",
        subtitle: "WE ARE HERE TO EXPORT",
        title: "PET SHEETS"
    }
];

function slideShow() {
    // Select hero section and text elements
    const heroSection = document.querySelector(".hero");
    const subtitle = document.getElementById("slide-subtitle");
    const title = document.getElementById("slide-title");

    // Set background image and text content
    heroSection.style.backgroundImage = `url(${slides[index].image})`;
    subtitle.textContent = slides[index].subtitle;
    title.textContent = slides[index].title;

    // Update index for next slide
    index = (index + 1) % slides.length;
}

// Change slide every 3 seconds
setInterval(slideShow, 3000);

// Initial call to show the first slide immed
slideShow()

