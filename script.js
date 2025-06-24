//get json from file and store it in a variable
// JSON FILE food-items.json //
const menuData = {
  "pizza": [
    { "name": "Pizza Margherita", "id":"pizza-margherita", "price": "8.50", "img": "https://images.pexels.com/photos/32605621/pexels-photo-32605621.jpeg", "description": "Une pizza classique avec de la sauce tomate, de la mozzarella et du basilic frais.", "ingredients": ["Pâte à pizza", "Sauce tomate", "Mozzarella", "Basilic frais"], "allergens": ["Gluten", "Lactose"] },
    { "name": "Pizza Pepperoni", "id":"pizza-pepperoni", "price": "9.00", "img": "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg", "description": "Pizza garnie de sauce tomate, mozzarella et tranches de pepperoni épicé.", "ingredients": ["Pâte à pizza", "Sauce tomate", "Mozzarella", "Pepperoni"], "allergens": ["Gluten", "Lactose"] },
    { "name": "Pizza 4 Fromages", "id":"pizza-4-fromages", "price": "9.50", "img": "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg", "description": "Pizza avec sauce tomate, mozzarella, gorgonzola, emmental et parmesan.", "ingredients": ["Pâte à pizza", "Sauce tomate", "Mozzarella", "Gorgonzola", "Emmental", "Parmesan"], "allergens": ["Gluten", "Lactose"] },
    { "name": "Pizza Végétarienne", "id":"pizza-vegetarienne", "price": "8.80", "img": "https://images.pexels.com/photos/10779683/pexels-photo-10779683.jpeg", "description": "Pizza garnie de légumes frais, sauce tomate et mozzarella.", "ingredients": ["Pâte à pizza", "Sauce tomate", "Mozzarella", "Légumes frais (poivrons, champignons, oignons, olives)"], "allergens": ["Gluten", "Lactose"] }
  ],
  "desserts": [
    { "name": "Fondant au chocolat", "id":"fondant-chocolat", "price": "3.50", "img": "https://images.pexels.com/photos/9976034/pexels-photo-9976034.jpeg", "description": "Gâteau au chocolat au cœur fondant.", "ingredients": ["Chocolat noir", "Beurre", "Œufs", "Sucre", "Farine"], "allergens": ["Gluten", "Lactose", "Œufs"] },
    { "name": "Crème brûlée", "id":"creme-brulee", "price": "3.00", "img": "https://images.pexels.com/photos/31501240/pexels-photo-31501240.jpeg", "description": "Crème onctueuse à la vanille caramélisée.", "ingredients": ["Crème", "Œufs", "Sucre", "Vanille"], "allergens": ["Lactose", "Œufs"] },
    { "name": "Mousse au chocolat", "id":"mousse-chocolat", "price": "2.80", "img": "https://images.pexels.com/photos/5638547/pexels-photo-5638547.jpeg", "description": "Mousse légère au chocolat noir.", "ingredients": ["Chocolat noir", "Œufs", "Sucre"], "allergens": ["Œufs"] }
  ],
  "burgers": [
    { "name": "Cheeseburger", "id":"cheeseburger", "price": "6.50", "img": "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg", "description": "Burger avec steak haché, fromage, salade, tomate et sauce.", "ingredients": ["Pain à burger", "Steak haché", "Fromage", "Salade", "Tomate", "Sauce burger"], "allergens": ["Gluten", "Lactose"] },
    { "name": "Double Burger", "id":"doubleburger", "price": "7.50", "img": "https://images.pexels.com/photos/28828553/pexels-photo-28828553.jpeg", "description": "Burger double steak, fromage, salade, tomate et sauce.", "ingredients": ["Pain à burger", "Double steak haché", "Fromage", "Salade", "Tomate", "Sauce burger"], "allergens": ["Gluten", "Lactose"] },
    { "name": "Chicken Burger", "id":"chickenburger", "price": "6.80", "img": "https://images.pexels.com/photos/15662255/pexels-photo-15662255.jpeg", "description": "Burger au poulet pané, salade, tomate et sauce.", "ingredients": ["Pain à burger", "Poulet pané", "Salade", "Tomate", "Sauce burger"], "allergens": ["Gluten", "Lactose", "Œufs"] }
  ],
  "boissons": [
    { "name": "Coca-Cola", "id":"cocacola", "price": "2.00", "img": "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg", "description": "Boisson gazeuse rafraîchissante au cola.", "ingredients": ["Eau gazéifiée", "Sucre", "Colorant caramel", "Arômes", "Caféine"], "allergens": [] },
    { "name": "Fanta Orange", "id":"fanta-orange", "price": "2.00", "img": "https://images.pexels.com/photos/13950097/pexels-photo-13950097.jpeg", "description": "Boisson gazeuse à l'orange.", "ingredients": ["Eau gazéifiée", "Sucre", "Jus d'orange", "Arômes", "Colorant"], "allergens": [] },
    { "name": "Eau minérale", "id":"eau", "price": "1.50", "img": "https://images.pexels.com/photos/8217464/pexels-photo-8217464.jpeg", "description": "Eau minérale naturelle.", "ingredients": ["Eau minérale"], "allergens": [] }
  ],
  "glaces": [
    { "name": "Glace Vanille", "id":"glace-vanille", "price": "2.50", "img": "https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg", "description": "Crème glacée à la vanille.", "ingredients": ["Lait", "Crème", "Sucre", "Vanille"], "allergens": ["Lactose"] },
    { "name": "Glace Chocolat", "id":"glace-chocolat", "price": "2.50", "img": "https://images.pexels.com/photos/1346341/pexels-photo-1346341.jpeg", "description": "Crème glacée au chocolat.", "ingredients": ["Lait", "Crème", "Sucre", "Chocolat"], "allergens": ["Lactose"] },
    { "name": "Glace Fraise", "id":"glace-fraise", "price": "2.50", "img": "https://images.pexels.com/photos/2161649/pexels-photo-2161649.jpeg", "description": "Crème glacée à la fraise.", "ingredients": ["Lait", "Crème", "Sucre", "Fraise"], "allergens": ["Lactose"] }
  ]
};


function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
function getCookie(name) {
  return document.cookie.split('; ').reduce((acc, val) => {
    const parts = val.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : acc;
  }, '');
}

// Panier : récupération / sauvegarde
function getCart() {
  const cookie = getCookie("cart");
  return cookie ? JSON.parse(cookie) : [];
}
function saveCart(cart) {
  setCookie("cart", JSON.stringify(cart), 7);
}
function updateTotalAmount() {
  const cart = getCart();
  let total = 0;
  cart.forEach(item => {
    total += item.unitPrice * item.quantity;
  });
 const span = document.getElementById("total-amount");
  if (span) {
    span.textContent = total.toFixed(2) + " €";
  }
}
// Ajouter un produit au panier (ou augmenter la quantité)
function addToCart(product, quantity) {
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
    cart[existingIndex].totalPrice = parseFloat((cart[existingIndex].unitPrice * cart[existingIndex].quantity).toFixed(2));
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      unitPrice: product.unitPrice,
      quantity: quantity,
      totalPrice: parseFloat((product.unitPrice * quantity).toFixed(2))
    });
  }

  saveCart(cart);
  updateTotalAmount();
}

// Afficher les produits d'une catégorie
function loadMenu(category) {
 if (category === "allergenes") {
  const menuGrid = document.getElementById("menuGrid");
  menuGrid.innerHTML = "";

  for (const cat in menuData) {
    menuData[cat].forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2><b>${item.name}</b></h2>
        <p><b>Ingrédients</b> : ${item.ingredients.join(", ")}</p>
        <p><b>Allergènes</b> : ${item.allergens.length > 0 ? item.allergens.join(", ") : "Aucun"}</p>
      `;

      menuGrid.appendChild(card);
    });
  }
}else{
  const menuGrid = document.getElementById("menuGrid");
  menuGrid.innerHTML = "";

  menuData[category].forEach(item => {
    const productId = item.id || item.name.toLowerCase().replace(/\s+/g, "-");
    const priceFloat = parseFloat(item.price.replace("€", "").replace(",", "."));

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <div class="actions">
        <button class="qty-btn" data-type="minus">-</button>
        <span class="qty" id="qty-${productId}">1</span>
        <button class="qty-btn" data-type="plus">+</button>
      </div>
      <button class="add-btn" data-id="${productId}">AJOUTER AU PANIER</button>
    `;

    menuGrid.appendChild(card);

    // Interactions
    const minusBtn = card.querySelector('[data-type="minus"]');
    const plusBtn = card.querySelector('[data-type="plus"]');
    const qtyDisplay = card.querySelector(`#qty-${productId}`);
    const addBtn = card.querySelector('.add-btn');

    let quantity = 1;

    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });

    plusBtn.addEventListener("click", () => {
      quantity++;
      qtyDisplay.textContent = quantity;
    });

    addBtn.addEventListener("click", () => {
      addToCart({ id: productId, name: item.name, unitPrice: priceFloat }, quantity);
    });
  });
  }
}

// Gestion des clics de menu
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu-item").forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    const category = item.getAttribute("data-category");
    loadMenu(category);
  });
});

    // Afficher/Masquer le panier
document.getElementById("cart").addEventListener("click", () => {
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.style.display = cartContainer.style.display === "none" ? "block" : "none";
  renderCart(); // recharge les données à chaque ouverture
});

function renderCart() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cartItems");
  const totalSpan = document.getElementById("totalAmount");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Votre panier est vide.</p>";
    totalSpan.textContent = "0.00 €";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.unitPrice * item.quantity;
    total += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
      ------------------------------------
      <div class="item-info">
        <strong>${item.name}</strong><br/>
        <small>
          <button class="qty-btn small-btn" data-action="minus" data-index="${index}">-</button>
          <span class="qty-display">${item.quantity}</span>
          <button class="qty-btn small-btn" data-action="plus" data-index="${index}">+</button>
          × ${item.unitPrice.toFixed(2)} €
        </small>
      </div>
      
      <div class="item-total">
        ${itemTotal.toFixed(2)} €
      </div>
    `;

    cartItemsContainer.appendChild(itemDiv);
  });

  totalSpan.textContent = total.toFixed(2) + " €";

  // Ajout des listeners +/-
  document.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.index);
      const action = btn.dataset.action;

      if (action === "plus") {
        cart[index].quantity += 1;
      } else if (action === "minus") {
        cart[index].quantity -= 1;
      }

      //s'assurer que si la quantité devient 0, l'élément est retiré du panier
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
      
      saveCart(cart);
      renderCart();
      updateTotalAmount();
if (cart.length === 0) {
  //hide le panier si vide
  document.getElementById("cartContainer").style.display = "none";
}else {
cart[index].totalPrice = parseFloat((cart[index].quantity * cart[index].unitPrice).toFixed(2));
}
      

      saveCart(cart);
      renderCart();
      updateTotalAmount();
    });
  });
}


// Vider le panier
document.getElementById("clear-cart").addEventListener("click", () => {
  saveCart([]);
  renderCart();
  updateTotalAmount(); // met à jour total ailleurs si besoin
});

// Commande (à personnaliser selon besoin)
document.getElementById("checkout").addEventListener("click", () => {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Votre panier est vide !");
    return;
  }else {
    //go to order confirmation page
    window.location.href = "cart.html";
  }
});

// Fermer le panier si on clique en dehors
document.addEventListener("click", function (event) {
  const cartContainer = document.getElementById("cartContainer");
  const cartButton = document.getElementById("cart");

  // Si le panier est visible
  if (cartContainer.style.display === "block") {
    // Si le clic n’est ni dans le panier ni sur le bouton qui l’ouvre
    if (!cartContainer.contains(event.target) && !cartButton.contains(event.target) && !event.target.classList.contains("qty-btn") && !event.target.classList.contains("small-btn") && !event.target.classList.contains("menu-item") && !event.target.classList.contains("cart")) {
      cartContainer.style.display = "none";
    }
  }
});


// Initialisation
loadMenu("pizza");
updateTotalAmount();
