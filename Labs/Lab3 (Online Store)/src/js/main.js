// console.log("Hi there!");

let Carts = document.querySelectorAll('.add_cart');


// The list of Our Sneakers is:

let listProducts = [
    {
        name: Sneakers1,
        tag: 'sneakers1',
        price: 40,
        size: 39,
        inCart: 0
    },
    {
        name: Sneakers2,
        tag: 'sneakers2',
        price: 35,
        size: 41,
        inCart: 0
    },
    {
        name: Sneakers3,
        tag: 'sneakers3',
        price: 45,
        size: 42,
        inCart: 0
    },
    {
        name: Sneakers4,
        tag: 'sneakers4',
        price: 50,
        size: 40.5,
        inCart: 0
    },
]; 


// adding the EventListener looper to these carts (quantity)

for (let q=0; q < Carts.length; q++) {
    Carts[q].addEventListener('click', () => {
        cartNumbers(listProducts[q]);
        // console.log("added to the cart when we clicked it");
        totalCost(listProducts[q])
    })
}


// To remember the number of the products when reloading the page

function onReloadCart() {
    let goodsNumbers = localStorage.getItem('cartNumbers');

    if (goodsNumbers) {
        document.querySelector('.cart span').textContent = goodsNumbers;
    }
}


function cartNumbers(listProducts) {

    // Now we can find out which product did we click
    // console.log("The product clicked is", listProducts)

    let goodsNumbers = localStorage.getItem('cartNumbers');

    goodsNumbers = parseInt(goodsNumbers);


    if (goodsNumbers) {
        localStorage.setItem('cartNumbers', goodsNumbers +1);
        document.querySelector('.cart span').textContent = goodsNumbers + 1;
    }

    else {

        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    
    setItems(listProducts);
}


function setItems(listProducts) {

    // console.log("Inside of SetItems function");
    // console.log("My product is", listProducts);

    let CartItems = localStorage.getItem("ProductsInCart");

    // now we can pass JSON into a JS object

    CartItems = JSON.parse(CartItems);
    // console.log("My CartItems are", CartItems);
    
    if(CartItems != null) {

        if(CartItems[listProducts.tag] == undefined) {
            CartItems = { ...CartItems, [listProducts.tag]: listProducts
            }
        }

        CartItems[listProducts.tag].inCart += 1;
    }
    else {
        listProducts.inCart = 1;
        CartItems = {
            [listProducts.tag]: listProducts
        }
    }

    localStorage.setItem("ProductsInCart",JSON.stringify(CartItems));
}



// Calculating the total Cost of our Products

function totalCost(listProducts) {

    // now we can see the price of the product when clicked
    // console.log("The price of the product is", listProducts.price);

    let cartCost = localStorage.getItem("totalCost");
    
    // whenever we get smth back from the local Storage it comes as a String
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + listProducts.price);
    }
    else {
        localStorage.setItem("totalCost", listProducts.price);
    }
}

// Cart Display

function cartDisplay() {
    let CartItems = localStorage.getItem("productsInCart")
    CartItems - JSON.parse(CartItems);
    let productSection = document.querySelector (".products");


    console.log(CartItems);

    if(CartItems && productSection) {
        // console.log("ishere");
        productSection.innerHTML = '';
        Object.values(CartItems).map(item => {
            productSection.innerHTML += `
            <div class="product_container">
            <p>${item.number}</p>
               <div class = "product">
                   <div class="product_name">
                   <img src="${item.img}"></img>
                   <span>${item.title}</span>
                   </div>
               </div>
               <div class = "price">${item.price}</div>
               <div class = "quantity">
                    <i class='bx bxs-left-arrow'></i>
                    <span class="inCartItems">${item.inCart}</span>
                    <i class='bx bxs-right-arrow'></i>
               </div>
               <div class="total">
                   ${item.inCart * item.price}
               </div>
               <div class="remove-button">
                    <i class='bx bxs-checkbox-minus bx-sm'></i>
               </div>
            
            `
        });
    }
}

onReloadCart();
cartDisplay();