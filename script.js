// script.js

let products = [
    {
        id: 1,
        name: "VENETIAN BLIND",
        rating: 8,
        image: "img/venetian_1.jpg",
        shopeeLink: "https://www.shopee.com/product1",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 2,
        name: "AREUM SKIRT | ROK LINEN",
        rating: 10,
        image: "img/rok.png",
        shopeeLink: "https://shp.ee/gedy7ju",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 3,
        name: "Product 1",
        rating: 4,
        image: "img/venetian_1.jpg",
        shopeeLink: "https://www.shopee.com/product1",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 4,
        name: "Product 1",
        rating: 4,
        image: "img/venetian_1.jpg",
        shopeeLink: "https://www.shopee.com/product1",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 5,
        name: "Product 1",
        rating: 4,
        image: "img/venetian_1.jpg",
        shopeeLink: "https://www.shopee.com/product1",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    // Add more products here
];

// Function to generate HTML for product cards
function generateProductCards() {
    const main = document.querySelector('#product-list');
    main.innerHTML = '';

    products.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const productIndex = document.createElement('h2');
        productIndex.classList.add('product-index');
        productIndex.textContent = `#${product.id}`;
        card.appendChild(productIndex);

        const productImage = document.createElement('img');
        productImage.src = product.image;
        card.appendChild(productImage);

        const productName = document.createElement('h4');
        productName.classList.add('product-name');
        productName.textContent = product.name;
        card.appendChild(productName);

        const rating = document.createElement('div');
        rating.classList.add('rating-image');
        for (let i = 0; i < product.rating; i++) {
            const star = document.createElement('img');
            star.src = 'img/star.png'; // Replace with the star image path
            rating.appendChild(star);
        }
        card.appendChild(rating);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const shopeeLink = document.createElement('a');
        shopeeLink.href = product.shopeeLink;
        shopeeLink.classList.add('button', 'shopping-button');
        const shopeeLogo = document.createElement('img');
        shopeeLogo.src = 'img/logo/logo_shopee.png'; // Replace with the Shopee logo image path
        shopeeLink.appendChild(shopeeLogo);
        buttonContainer.appendChild(shopeeLink);

        const tokopediaLink = document.createElement('a');
        tokopediaLink.href = product.tokopediaLink;
        tokopediaLink.classList.add('button', 'shopping-button');
        const tokopediaLogo = document.createElement('img');
        tokopediaLogo.src = 'img/logo/logo_tokopedia.png'; // Replace with the Tokopedia logo image path
        tokopediaLink.appendChild(tokopediaLogo);
        buttonContainer.appendChild(tokopediaLink);

        const lazadaLink = document.createElement('a');
        lazadaLink.href = product.lazadaLink;
        lazadaLink.classList.add('button', 'shopping-button');
        const lazadaLogo = document.createElement('img');
        lazadaLogo.src = 'img/logo/logo_lazada.png'; // Replace with the Lazada logo image path
        lazadaLink.appendChild(lazadaLogo);
        buttonContainer.appendChild(lazadaLink);

        const tiktokLink = document.createElement('a');
        tiktokLink.href = product.tiktokLink;
        tiktokLink.classList.add('button', 'shopping-button');
        const tiktokLogo = document.createElement('img');
        tiktokLogo.src = 'img/logo/logo_tiktok.png'; // Replace with the TikTok logo image path
        tiktokLink.appendChild(tiktokLogo);
        buttonContainer.appendChild(tiktokLink);

        card.appendChild(buttonContainer);

        main.appendChild(card);
    });
}

// Generate product cards on page load
generateProductCards();

// Search functionality
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('#search-input').value.trim().toLowerCase();

    if (searchInput === '') {
        generateProductCards();
    } else {
        const filteredProducts = products.filter((product) => {
            return (
                product.name.toLowerCase().includes(searchInput) ||
                product.id.toString().includes(searchInput)
            );
        });

        products = filteredProducts;
        generateProductCards();
    }
});
