document.addEventListener('DOMContentLoaded', function() {
  const cart = document.getElementById('cart');
  const items = cart.querySelectorAll('.item');

  // Function to update total price
  function updateTotalPrice() {
    let totalPrice = 0;
    items.forEach(item => {
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      const price = parseFloat(item.querySelector('.price').textContent.slice(1)); // Remove $ and parse
      totalPrice += quantity * price;
    });

    document.getElementById('total-price').textContent = '$' + totalPrice.toFixed(2); // Format price
  }

  // Event assignement for +, -, delete, and like buttons
  cart.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('plus')) {
      const quantityElement = target.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }

    if (target.classList.contains('minus')) {
      const quantityElement = target.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
    }

    if (target.classList.contains('delete-btn')) {
      target.closest('.item').remove();
      updateTotalPrice();
    }

    
 // Toggle like button
 if (target.classList.contains('like-btn') || target.parentElement.classList.contains('like-btn')) {
  const heartIcon = target.classList.contains('like-btn') ? target.querySelector('i.fa-heart') : target.parentElement.querySelector('i.fa-heart');
  if (heartIcon.classList.contains('liked')) {
    heartIcon.classList.remove('liked');
    heartIcon.style.color = '#ccc';
  } else {
    heartIcon.classList.add('liked');
    heartIcon.style.color = 'red';
  }
}

    
  });
  // Initial update of total price
  updateTotalPrice();
});

