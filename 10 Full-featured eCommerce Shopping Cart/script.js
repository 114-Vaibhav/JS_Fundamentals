const products = [
    {
        "product_id": "A1",
        "title": "Samsung Galaxy M14 5G",
        "category": "mobile",
        "description": "6.6-inch display, 6000mAh battery, 5G smartphone with Exynos processor.",
        "image": "images/A1.jpg",
        "price": 12999,
        "inCart": "no"
    },
    {
        "product_id": "A2",
        "title": "Realme Narzo 60 5G",
        "category": "mobile",
        "description": "Stylish design with 64MP camera and MediaTek Dimensity chipset.",
        "image": "images/A2.jpg",
        "price": 14999,
        "inCart": "no"
    },
    {
        "product_id": "A3",
        "title": "Redmi Note 12",
        "category": "mobile",
        "description": "AMOLED display, Snapdragon processor, fast charging support.",
        "image": "images/A3.jpg",
        "price": 13999,
        "inCart": "no"
    },
    {
        "product_id": "A4",
        "title": "iQOO Z6 Lite 5G",
        "category": "mobile",
        "description": "Affordable 5G phone with Snapdragon processor and smooth display.",
        "image": "images/A4.jpg",
        "price": 11999,
        "inCart": "no"
    },
    {
        "product_id": "A5",
        "title": "POCO X5 5G",
        "category": "mobile",
        "description": "Powerful performance with 120Hz display and big battery.",
        "image": "images/A5.jpg",
        "price": 16999,
        "inCart": "no"
    },

    {
        "product_id": "B1",
        "title": "Men Slim Fit Casual Shirt",
        "category": "shirt",
        "description": "Cotton slim fit shirt perfect for casual and office wear.",
        "image": "images/B1.jpeg",
        "price": 799,
        "inCart": "no"
    },
    {
        "product_id": "B2",
        "title": "Checked Cotton Shirt",
        "category": "shirt",
        "description": "Classic checked pattern shirt with comfortable fabric.",
        "image": "images/B2.jpeg",
        "price": 699,
        "inCart": "no"
    },
    {
        "product_id": "B3",
        "title": "Formal White Shirt",
        "category": "shirt",
        "description": "Elegant formal shirt ideal for office and meetings.",
        "image": "images/B3.jpeg",
        "price": 899,
        "inCart": "no"
    },
    {
        "product_id": "B4",
        "title": "Denim Casual Shirt",
        "category": "shirt",
        "description": "Trendy denim shirt with a modern fit.",
        "image": "images/B4.jpeg",
        "price": 1199,
        "inCart": "no"
    },
    {
        "product_id": "B5",
        "title": "Printed Casual Shirt",
        "category": "shirt",
        "description": "Stylish printed shirt for daily wear.",
        "image": "images/B5.jpeg",
        "price": 749,
        "inCart": "no"
    },

    {
        "product_id": "C1",
        "title": "Floral Print Women Top",
        "category": "girls_top",
        "description": "Lightweight floral printed top for casual outings.",
        "image": "images/C1.jpeg",
        "price": 499,
        "inCart": "no"
    },
    {
        "product_id": "C2",
        "title": "Crop Tank Top",
        "category": "girls_top",
        "description": "Sleeveless crop top for summer styling.",
        "image": "images/C2.jpeg",
        "price": 299,
        "inCart": "no"
    },
    {
        "product_id": "C3",
        "title": "Striped Casual Top",
        "category": "girls_top",
        "description": "Comfortable striped top for everyday wear.",
        "image": "images/C3.jpeg",
        "price": 399,
        "inCart": "no"
    },
    {
        "product_id": "C4",
        "title": "V-Neck Stylish Top",
        "category": "girls_top",
        "description": "Elegant V-neck top with soft fabric.",
        "image": "images/C4.jpeg",
        "price": 549,
        "inCart": "no"
    },
    {
        "product_id": "C5",
        "title": "Oversized Casual Top",
        "category": "girls_top",
        "description": "Loose fit trendy oversized top.",
        "image": "images/C5.jpeg",
        "price": 599,
        "inCart": "no"
    },

    {
        "product_id": "D1",
        "title": "Anouk Embroidered Kurta Set",
        "category": "girls_suit",
        "description": "Elegant embroidered kurta set perfect for festive wear.",
        "image": "images/D1.jpeg",
        "price": 639,
        "inCart": "no"
    },
    {
        "product_id": "D2",
        "title": "Sangria Printed Kurta",
        "category": "girls_suit",
        "description": "Printed kurta with ethnic design and mirror work.",
        "image": "images/D2.jpeg",
        "price": 699,
        "inCart": "no"
    },
    {
        "product_id": "D3",
        "title": "Libas Straight Kurta",
        "category": "girls_suit",
        "description": "Comfortable straight kurta for daily wear.",
        "image": "images/D3.jpeg",
        "price": 449,
        "inCart": "no"
    },
    {
        "product_id": "D4",
        "title": "Floral Printed Kurta Set",
        "category": "girls_suit",
        "description": "Trendy floral kurta set with dupatta.",
        "image": "images/D4.jpeg",
        "price": 989,
        "inCart": "no"
    },
    {
        "product_id": "D5",
        "title": "Geometric Print Kurta Set",
        "category": "girls_suit",
        "description": "Modern geometric print kurta with trousers.",
        "image": "images/D5.jpeg",
        "price": 734,
        "inCart": "no"
    }
];

const productList = document.getElementById("product-list");
const filter = document.getElementById("category-filter");
const searchInput = document.getElementById("search-input");
const cartBtn = document.getElementById("cart-btn");
const productBtn = document.getElementById("products-btn");

function displayProducts(products) {
    productList.innerHTML = "";

    // productList.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4";

    products.forEach(product => {
        let productCard = document.createElement("div");

        productCard.className =
            "bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col";

        productCard.innerHTML = `
            <div class="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src="${product.image}" alt="${product.title}" 
                     class="h-full object-contain hover:scale-105 transition duration-300">
            </div>

            <div class="p-4 flex flex-col flex-grow">
                <h3 class="text-lg font-semibold text-gray-800 line-clamp-1">
                    ${product.title}
                </h3>

                <p class="text-sm text-gray-500 mt-1 line-clamp-2">
                    ${product.description}
                </p>

                <p class="text-xl font-bold text-green-600 mt-2">
                    ₹${product.price}
                </p>
            
                <button 
                    class="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    onclick="addToCart('${product.product_id}')">
                    Add to Cart
                </button>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

filter.addEventListener("change", () => {
    const selectedCategory = filter.value;
    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(product => product.category === selectedCategory);
    displayProducts(filteredProducts);
});
const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
displayProducts(shuffledProducts);


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
    const product = products.find(p => p.product_id === productId);
    const existingProduct = cart.find(item => item.product_id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartCount.textContent = totalCount;
}
updateCartCount();

function reduceQuantity(productId) {
    const product = cart.find(p => p.product_id === productId);
    if (product.quantity == 1) {
        removeFromCart(productId);
    } else {
        product.quantity--;
        displayCart(cart);
    }

}
function increaseQuantity(productId) {
    const product = cart.find(p => p.product_id === productId);
    // if(product.quantity==1){
    //     removeFromCart(productId);
    // }else{
    product.quantity++;
    displayCart(cart);
    // }
}

function removeFromCart(productId) {
    const existingProduct = cart.find(item => item.product_id === productId);

    if (!existingProduct) return;

    if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
    } else {
        cart = cart.filter(item => item.product_id !== productId);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(cart);
}
const offer = document.getElementById("offer");
let discount = 0;
offer.addEventListener("change", () => {
    if (offer.value == 'OFF100') {
        discount = 100;
    } else if (offer.value == 'OFF200') {
        discount = 200;
    }
    displayCart(cart);
})

function displayCart(cart) {
    const itemsContainer = document.getElementById("cart-items");

    itemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach(product => {
        console.log(product);
        total += product.price * product.quantity;

        const item = document.createElement("div");
        item.className = "flex bg-white rounded-xl shadow p-4 gap-4";

        item.innerHTML = `
            <img src="${product.image}" class="w-24 h-24 object-contain bg-gray-100 rounded-lg">
            <div class="flex flex-col flex-grow">
                <h3 class="font-semibold text-gray-800">${product.title}</h3>
                <p class="text-sm text-gray-500">${product.description}</p>
                <p class="text-green-600 font-bold mt-2">₹${product.price}</p>
            </div>
            <h3 id="total-price" class="font-semibold text-gray-800">${product.quantity} * ${product.price} = ${product.quantity * product.price}</h3>
            <div class="flex items-center gap-3">
                <button 
                    class="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-md hover:bg-red-700 active:scale-95 transition"
                    onClick="reduceQuantity('${product.product_id}')">
                    -
                </button>

                <span class="font-semibold text-gray-800 min-w-[40px] text-center">
                    ${product.quantity}
                </span>

                <button 
                    class="bg-gray-200 text-black w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-300 active:scale-95 transition"
                    onClick="increaseQuantity('${product.product_id}')">
                    +
                </button>

            </div>
            <button 
            class="mt-auto bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            onClick="removeFromCart('${product.product_id}')" >
            Remove</button>
        `;

        itemsContainer.appendChild(item);
    });

    // Calculations
    const tax = total * 0.02;
    const delivery = cart.length * 30;
    const platformFee = cart.length * 2;
    const grandTotal = total + tax + delivery + platformFee - discount;

    // Update summary
    document.getElementById("items-total").innerText = `₹${total.toFixed(2)}`;
    document.getElementById("tax").innerText = `₹${tax.toFixed(2)}`;
    document.getElementById("delivery").innerText = `Delivery(${cart.length}*30)`;
    document.getElementById("delivery-value").innerText = `₹${delivery}`;
    document.getElementById("platform-fee").innerText = `₹${platformFee}`;
    document.getElementById("discount").innerText = `₹${discount}`;
    document.getElementById("grand-total").innerText = `₹${grandTotal.toFixed(2)}`;
}

cartBtn.addEventListener("click", () => {
    document.getElementById("products").classList.add("hidden");
    productBtn.classList.remove("hidden");
    cartBtn.classList.add("hidden");
    document.getElementById("cart").classList.remove("hidden");
    displayCart(cart);
});

productBtn.addEventListener("click", () => {
    document.getElementById("products").classList.remove("hidden");
    productBtn.classList.add("hidden");
    cartBtn.classList.remove("hidden");
    document.getElementById("cart").classList.add("hidden");
})