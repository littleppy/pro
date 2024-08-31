document.addEventListener('DOMContentLoaded', () => {
    const popcats = [
        { id: 'popcat1', countId: 'click-count1' },
        { id: 'popcat2', countId: 'click-count2' },
        { id: 'popcat3', countId: 'click-count3' },
    ];

    popcats.forEach(({ id, countId }) => {
        const popcat = document.getElementById(id);
        const clickCountElement = document.getElementById(countId);

        // Retrieve the saved click count from localStorage or default to 0
        let clickCount = parseInt(localStorage.getItem(id), 10) || 0;

        // Display the current click count
        clickCountElement.textContent = `Vote ${clickCount}`;

        popcat.addEventListener('click', () => {
            // Increment the click count
            clickCount++;

            // Update the click count display
            clickCountElement.textContent = `Vote  ${clickCount}`;

            // Save the updated click count to localStorage
            localStorage.setItem(id, clickCount);

            // Add the "popped" class to trigger the scale transform
            popcat.classList.add('popped');

            // Remove the class after the transition ends to reset the scale
            setTimeout(() => {
                popcat.classList.remove('popped');
            }, 100); // Match the duration of the CSS transition
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const closeModal = document.getElementById('closeModal');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    let cart = [];
    
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.product} - $${item.price}`;
            cartItemsContainer.appendChild(itemElement);
            total += parseFloat(item.price);
        });
        cartTotalElement.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }

    document.querySelectorAll('.product-card button').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.getAttribute('data-product');
            const price = event.target.getAttribute('data-price');
            cart.push({ product, price });
            updateCart();
        });
    });

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.content').classList.add('hidden');
    }, 3000); // Delay of 3 seconds before the transition
});
