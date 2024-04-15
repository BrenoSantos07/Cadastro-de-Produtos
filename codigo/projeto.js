document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const price = parseFloat(document.getElementById('price').value);

        if (name && !isNaN(price)) {
            addProduct(name, price);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    function addProduct(name, price) {
        const li = document.createElement('li');
        li.innerHTML = `${name} - R$ ${price.toFixed(2)} <button onclick="deleteProduct(this)">Excluir</button>`;
        productList.appendChild(li);
    }

    window.deleteProduct = function(element) {
        element.parentElement.remove();
    };
});