function findGift() {
    // Simulating fetching products from API
    const products = [
        { name: "Toy Car", link: "https://www.amazon.com/toy-car" },
        { name: "Building Blocks", link: "https://www.amazon.com/building-blocks" },
        { name: "Action Figure", link: "https://www.amazon.com/action-figure" }
    ];

    const promptInput = document.getElementById("promptInput").value;
    const productList = document.getElementById("productList");

    // Clear previous results
    productList.innerHTML = "";

    if (promptInput.trim() !== "") {
        // Displaying the results
        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("product-item");

            const productLink = document.createElement("a");
            productLink.href = product.link;
            productLink.textContent = product.name;

            productItem.appendChild(productLink);
            productList.appendChild(productItem);
        });

        // Changing the message
        const message = document.getElementById("message");
        message.textContent = "Here are some gift ideas based on your prompt!";
    } else {
        // Displaying default message
        const message = document.getElementById("message");
        message.textContent = "Please enter a prompt to find gift ideas.";
    }
}

// Dynamic Text Animation
const dynamicText = document.getElementById("dynamicText");
const texts = [
    "Find the Perfect Gift! 🎁",
    "Gift.AI - Your Gift Finder 🌟",
    "Discover Amazing Gifts Here! 🎉",
    "Make Every Occasion Special! 🎈",
    "Find the Ideal Present! 🎉",
    "Unlock Unique Gift Ideas! 🎁",
    "The Joy of Giving! 🌟",
    "Celebrate with the Perfect Gift! 🎁",
    "Gifts for Every Personality! 🌟",
    "Surprise Someone Special! 🎉",
    "Spread Happiness with Gifts! 🎁"
];
let index = 0;

function changeDynamicText() {
    dynamicText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeDynamicText, 3000); // Change text every 3 seconds

// Night Mode Toggle
function toggleNightMode() {
    const body = document.body;
    const modeIcon = document.getElementById("modeIcon");

    body.classList.toggle("night-mode");

    // Toggle dynamic text color for night mode
    dynamicText.classList.toggle("night-mode-text");

    // Change mode icon
    if (body.classList.contains("night-mode")) {
        modeIcon.textContent = "🌞"; // Moon icon for night mode
    } else {
        modeIcon.textContent = "🌙"; // Sun icon for day mode
    }
}
