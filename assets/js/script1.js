var student = [
    { id: 0, image: 'assets/images/p1.png', name: 'APPLE', price: 9000, },
    { id: 1, image: 'assets/images/p2.jpg', name: 'ONE PLUS', price: 1000, },
    { id: 2, image: 'assets/images/p3.jpeg', name: 'VIVO', price: 5000, },
    { id: 3, image: 'assets/images/p4.png', name: 'SAMSUNG', price: 7000, },
];

for (var i = 0; i < student.length; i++) {
    document.getElementById('row').innerHTML += `
    <div class="col-11 col-lg-3 col-md-6">
        <div class="card shadow-lg">
            <div class="card-content">
            <img src=${student[i].image} width="100%" alt="">
            <h2>${student[i].name}</h2>
            <span class="fs-4" style="line-height:0.7">$${student[i].price}</span>
            <button onclick=add(${i}) class="btn btn-primary" style="font-size:20px;">ADD TO CART</button>
            </div>
        </div>
    </div>
`;
}
let products = JSON.parse(localStorage.getItem('products'));
const add = (productId) => {

    if (products === null) {
        products = [];
    }
    const cartItem = {
        id: student[productId].id,
        name: student[productId].name,
        price: student[productId].price,
        image: student[productId].image,
        quantity: 1
    };

    
    checkQuantity(cartItem);
}

const checkQuantity = (cartItem) => {
    const existingItemIndex = products.findIndex((item) => {
        return item.id === cartItem.id
    });

    if (existingItemIndex !== -1) {
        products[existingItemIndex].quantity += 1;
    } else {
        products.push(cartItem);
    }

    saveToLocalStorage();
    viewData();
}

function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

