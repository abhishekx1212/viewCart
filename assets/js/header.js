const headerData = `
        <div class="container-fluid">
            <div class="row bg-dark py-2">
                <div class="col-12 d-flex justify-content-between align-items-center">
                    <div class="header-logo">
                        <img src="assets/images/logo.png" alt="" width="130px">
                    </div>
                    <div class="header-content">
                        <nav>
                            <a href="index.html">Home</a>
                            <a href="">About</a>
                            <a href="">Service</a>
                            <a href="product.html">Products</a>
                            <a href="cart.html">
                                <span><i class="fa-solid fa-cart-shopping" style="letter-spacing: -0.8rem"></i></span>
                                <span id="cartNum" ></span>    
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
`;

document.querySelector('#header').innerHTML = headerData;
const product = JSON.parse(localStorage.getItem('products'));
viewData();
function viewData() {
    if (product != null) {
        document.getElementById('cartNum').innerHTML = product.length;
    } else {
        document.getElementById('cartNum').innerHTML = 0;
    }
}
