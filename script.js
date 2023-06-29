// script.js

let products = [
    {
        id: 1,
        name: "Venitian Blind",
        image: "img/venetian_1.jpg",
        category: "Home Decor",
        shopeeLink: "",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 2,
        name: "Areum skirt | Rok Linen",
        image: "img/rok.png",
        category: "Fashion",
        shopeeLink: "https://shp.ee/gedy7ju",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 3,
        name: "Product 1",
        image: "img/venetian_1.jpg",
        category: "Home Decor",
        shopeeLink: "https://www.shopee.com/product1",
        tokopediaLink: "",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 4,
        name: "Product 1",
        image: "img/venetian_1.jpg",
        category: "Home Decor",
        shopeeLink: "https://www.shopee.com/product1",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "",
        tiktokLink: "https://www.tiktok.com/product1"
    },
    {
        id: 5,
        name: "Product 1",
        image: "img/venetian_1.jpg",
        category: "Home Decor",
        shopeeLink: "https://www.shopee.com/product1",
        tokopediaLink: "https://www.tokopedia.com/product1",
        lazadaLink: "https://www.lazada.com/product1",
        tiktokLink: ""
    },
    // Add more products here
];

let originalProducts = [...products];

// Function to generate HTML for product cards
function generateProductCards() {
    const main = document.querySelector('#product-list');
    main.innerHTML = '';

    const searchInputNumber = document.querySelector('#search-input-number').value.trim().toLowerCase();
    const searchInputName = document.querySelector('#search-input-name').value.trim().toLowerCase();

    let filteredProducts = [...originalProducts];

    if (searchInputNumber !== '' && searchInputName === '') {
        filteredProducts = filteredProducts.filter((product) => {
            return product.id.toString().includes(searchInputNumber);
        });
    } else if (searchInputNumber === '' && searchInputName !== '') {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.toLowerCase().includes(searchInputName);
        });
    } else if (searchInputNumber !== '' && searchInputName !== '') {
        filteredProducts = filteredProducts.filter((product) => {
            const matchNumber = product.id.toString().includes(searchInputNumber);
            const matchName = product.name.toLowerCase().includes(searchInputName);
            return matchNumber && matchName;
        });
    }

    filteredProducts.forEach((product) => {
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

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        if (product.shopeeLink) {
            const shopeeLink = document.createElement('a');
            shopeeLink.href = product.shopeeLink;
            shopeeLink.classList.add('button', 'shopping-button');
            const shopeeLogo = document.createElement('img');
            shopeeLogo.src = 'img/logo/logo_shopee.png'; // Replace with the Shopee logo image path
            shopeeLink.appendChild(shopeeLogo);
            buttonContainer.appendChild(shopeeLink);
        }

        if (product.tokopediaLink) {
            const tokopediaLink = document.createElement('a');
            tokopediaLink.href = product.tokopediaLink;
            tokopediaLink.classList.add('button', 'shopping-button');
            const tokopediaLogo = document.createElement('img');
            tokopediaLogo.src = 'img/logo/logo_tokopedia.png'; // Replace with the Tokopedia logo image path
            tokopediaLink.appendChild(tokopediaLogo);
            buttonContainer.appendChild(tokopediaLink);
        }

        if (product.lazadaLink) {
            const lazadaLink = document.createElement('a');
            lazadaLink.href = product.lazadaLink;
            lazadaLink.classList.add('button', 'shopping-button');
            const lazadaLogo = document.createElement('img');
            lazadaLogo.src = 'img/logo/logo_lazada.png'; // Replace with the Lazada logo image path
            lazadaLink.appendChild(lazadaLogo);
            buttonContainer.appendChild(lazadaLink);

        }

        if (product.tiktokLink) {
            const tiktokLink = document.createElement('a');
            tiktokLink.href = product.tiktokLink;
            tiktokLink.classList.add('button', 'shopping-button');
            const tiktokLogo = document.createElement('img');
            tiktokLogo.src = 'img/logo/logo_tiktok.png'; // Replace with the TikTok logo image path
            tiktokLink.appendChild(tiktokLogo);
            buttonContainer.appendChild(tiktokLink);
        }


        card.appendChild(buttonContainer);

        main.appendChild(card);
    });
}


// Generate product cards on page load
generateProductCards();

// Search functionality
const searchForm = document.querySelector('#search-form');
const searchInputNumber = document.querySelector('#search-input-number');
const searchInputName = document.querySelector('#search-input-name');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchNumber = searchInputNumber.value.trim().toLowerCase();
    const searchName = searchInputName.value.trim().toLowerCase();

    if (searchNumber === '' && searchName === '') {
        generateProductCards();
    } else {
        const filteredProducts = products.filter((product) => {
            const productName = product.name.toLowerCase();
            const productNumber = product.id.toString();

            return (
                (searchNumber !== '' && productNumber.includes(searchNumber)) ||
                (searchName !== '' && productName.includes(searchName))
            );
        });

        products = filteredProducts;
        generateProductCards();
    }
});
