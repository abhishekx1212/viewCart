const headerData = `
    <div class="container-fluid">
        <div class="row bg-dark py-2">
            <div class="col-12 d-flex justify-content-between align-items-center header-parent">
                <div class="header-logo">
                    <img src="assets/images/logo.png" alt="" width="130px">
                </div>
                <div class="header-content">
                    <nav class="nav-1">
                        <a href="index.html" class="a-hide">Home</a>
                        <a href="" class="a-hide">About</a>
                        <a href="" class="a-hide">Service</a>
                        <a href="product.html" class="a-hide">Products</a>
                        <a href="cart.html">
                            <span><i class="fa-solid fa-cart-shopping" style="letter-spacing: -0.8rem"></i></span>
                            <span id="cartNum" style="letter-spacing: -0.3rem"></span>
                        </a>
                        <span><i class="fa-solid fa-bars"></i></span>
                    </nav>
                    <nav class="nav-2 text-center bg-dark">
                        <a href="index.html">Home</a>
                        <a href="">About</a>
                        <a href="">Service</a>
                        <a href="product.html">Products</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
`;


document.querySelector('#header').innerHTML = headerData;
const product = JSON.parse(localStorage.getItem('products'));

function viewData() {
    const product = JSON.parse(localStorage.getItem('products'));
    if (product != null) {
        document.getElementById('cartNum').innerHTML = product.length;
    } else {
        document.getElementById('cartNum').innerHTML = 0;
    }
}
viewData();