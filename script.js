let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-total').textContent = total.toFixed(2);

    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}

function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    let message = '¡Hola! Estoy interesado en comprar los siguientes productos:\n\n';
    cart.forEach(item => {
        message += `${item.name} - $${item.price.toFixed(2)}\n`;
    });
    message += `\nTotal: $${total.toFixed(2)}`;

    window.open('https://wa.me/2646086287?text=' + encodeURIComponent(message), '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});
