// console.log("Hi there!");

let carts = document.querySelectorAll('.add_cart');

// The list of Our Sneakers is:
let products = [
    {
        name: "First",
        tag: "sneakers1",
        price: 40,
        size: 39,
// In the beginning there's nothing in the cart, so then inCart: 0 to each item
        inCart: 0
    },
    {
        name: "Second",
        tag: "sneakers2",
        price: 35,
        size: 41,
        inCart: 0
    },
    {
        name: "Third",
        tag: "sneakers3",
        price: 45,
        size: 42,
        inCart: 0
    },
    {
        name: "Fourth",
        tag: "sneakers4",
        price: 50,
        size: 40.5,
        inCart: 0
    },
]; 


// adding the EventListener looper to these carts (quantity)

for (let q=0; q < carts.length; q++) {
    carts[q].addEventListener('click', () => {
        cartNumbers(products[q]);
        // console.log("added to the cart when we clicked it");
        totalCost(products[q])
    })
}


// To remember the number of the products when reloading the page

function onReloadCart() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.getElementsByClassName('.cart span').textContent = productNumbers;
    }
}


function cartNumbers(product) {

    // Now we can find out which product did we click
    console.log("The product clicked is", product);

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);


    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }

    else {

        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    
    setItems(product);
}


function setItems(product) {

    console.log("Inside of SetItems function");
    console.log("My product is", product);

    let cartItems = localStorage.getItem("productsInCart");

    // now we can pass JSON into a JS object

    cartItems = JSON.parse(cartItems);
    // console.log("My  artItems are", cartItems);
    
    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = { ...cartItems, [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product 
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


// Calculating the total Cost of our Products

function totalCost(product) {

    // Now we can see the price of the product when clicked
    // console.log("The price of the product is", product.price);
    let cartCost = localStorage.getItem("totalCost");
    // cartCost = parseInt(cartCost);
    
    // whenever we get smth back from the local Storage it comes as a String
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }
}

// Cart Display

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    // console.log(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    // console.log(cartItems);

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map((item) => {
            productContainer.innerHTML += `
            <div class="product">
                <button onclick="myFunction()" <i class='bx bxs-message-alt-x bx-md bx-rotate-270'></i></button>
                <img src="src/img/${item.tag}.jpg">
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <i id="quantity-dec" class='bx bxs-left-arrow bx-md' ></i>
                <span>${item.inCart}</span>
                <i id="quantity-inc" class='bx bxs-right-arrow bx-md'></i>
            </div>
            <div class="total">
                $${item.inCart * item.price},00
            </div>
            `;
        });
        productContainer.innerHTML  += `
        <div class="basketTotalContainer">
            <h4 class="basketTitle">
                Total before payment
            </h4>
            <h4 class="basketTotalArrows">
                ---------->
            </h4>
            <h4 class="basketTotal">
                $${cartCost},00
            </h4>
        </div>`;
    }
}

function myFunction() {
    var myobj = document.getElementsByClassName("products");
    myobj.remove();
  }


onReloadCart();
displayCart();