// JavaScript source code
let arr = [];
    let adCart = {
        '001': false,
        '002': false,
        '003': false,
        '004': false,
    };
    let products = {
        '011': {
            'price': 700,
            'amount': 1
        },
        '022': {
            'price': 540,
            'amount': 1
        },
        '033': {
            'price': 15,
            'amount': 1
        },
        '044': {
            'price': 20,
            'amount': 1
        },
    }
    var p;
p = document.getElementById('out');
var buy = document.getElementById('buy');
var flag = 0;
    document.onclick = event => {
        if (event.target.classList.contains('buttProduct')) {
            if (flag == 0) {
                p.innerHTML = "";
            }
            plusToCart(event.target.dataset.id);
            if (flag == 0) {
                buy.innerHTML = '<button class="buttonBuy" data-id="buy">BUY</button>';
                flag = 1;
            }
        }
        if (event.target.classList.contains('minus')) {

            minusNumber(event.target.dataset.id);
        }
        if (event.target.classList.contains('plus')) {
            plusNumber(event.target.dataset.id);
        }
        if (event.target.classList.contains('delete')) {
            del(event.target.dataset.id);
        }
        if (event.target.classList.contains('buttonBuy')) {
            buyProd();
        }

}
const buyProd = () => {
    alert("You have successfully completed your purchase!!!");
    p.innerHTML = '<h3>Cart is empty</h3>';
    buy.innerHTML = '';
    flag = 0;
    adCart['001'] = false;
    adCart['002'] = false;
    adCart['003'] = false;
    adCart['004'] = false;
    arr = [];
    products['011'].amount = 1;
    products['022'].amount = 1;
    products['033'].amount = 1;
    products['044'].amount = 1;
}
const del = id => {
    if (id == '011') {
        var index = arr.indexOf(1);
        if (index > -1) {
            arr.splice(index, 1);
        }
        p.innerHTML = "";
        adCart["001"] = false;
        products[id].amount = 1;
        if (arr.length == 0) {
            p.innerHTML = '<h3>Cart is empty</h3>';
            buy.innerHTML = '';
            flag = 0;
        }
        else {
            func();
        }
    }
    if (id == '022') {
        var index = arr.indexOf(2);
        if (index > -1) {
            arr.splice(index, 1);
        }
        p.innerHTML = "";

        adCart["002"] = false;

        products[id].amount = 1;
        if (arr.length == 0) {
            p.innerHTML = '<h3>Cart is empty</h3>';
            buy.innerHTML = '';
            flag = 0;
        }
        else {
            func();
        }
    }
    if (id == '033') {
        var index = arr.indexOf(3);
        if (index > -1) {
            arr.splice(index, 1);
        }
        p.innerHTML = "";
        adCart["003"] = false;

        products[id].amount = 1;
        if (arr.length == 0) {
            p.innerHTML = '<h3>Cart is empty</h3>';
            buy.innerHTML = '';
            flag = 0;
        }
        else {
            func();
        }
    }

    if (id == '044') {
        var index = arr.indexOf(4);
        if (index > -1) {
            arr.splice(index, 1);
        }
        p.innerHTML = "";
        adCart["004"] = false;
        products[id].amount = 1;
        if (arr.length == 0) {
            p.innerHTML = '<h3>Cart is empty</h3>';
            buy.innerHTML = '';
            flag = 0;
        }
        else {
            func();
        }
    }
}
    const minusNumber = id => {
        if ((id == '011') && (products[id].amount > 1)) {
            products[id].amount--;
            p.innerHTML = "";
            func();
        }
        if ((id == '022') && (products[id].amount > 1)) {
            products[id].amount--;
            p.innerHTML = "";
            func();
        }
        if ((id == '033') && (products[id].amount > 1)) {
            products[id].amount--;
            p.innerHTML = "";
            func();
        }
        if ((id == '044') && (products[id].amount > 1)) {
            products[id].amount--;
            p.innerHTML = "";
            func();
        }
    }
    const plusNumber = id => {
        if (id == '011') {
            products[id].amount++;
            p.innerHTML = "";
            func();
        }
        if (id == '022') {
            products[id].amount++;
            p.innerHTML = "";
            func();
        }
        if (id == '033') {
            products[id].amount++;
            p.innerHTML = "";
            func();
        }

        if (id == '044') {
            products[id].amount++;
            p.innerHTML = "";
            func();
        }
    }
    const plusToCart = id => {
        if ((id == '001') && (adCart[id] == false)) {
            adCart[id] = true;
            arr.push(1);
            printFirst();

        }
        if ((id == '002') && (adCart[id] == false)) {
            adCart[id] = true;
            arr.push(2);
            printSecond();
        }
        if ((id == '003') && (adCart[id] == false)) {
            adCart[id] = true;
            arr.push(3);
            printThird();

        }
        if ((id == '004') && (adCart[id] == false)) {
            adCart[id] = true;
            arr.push(4);
            printFourth();

        }
    }

    const printFirst = () => {
        var out = '<div class="first" style=" display: flex; flex-direction: row; position:relative; background-color: #eee; border:1px solid black"> <img src ="https://cdn2.iconfinder.com/data/icons/flat-set-2/64/flat_set_2-09-128.png" style = "width:20px; height:20px; margin-left: 10px; margin-top:17px"/> <div style="margin-left: 20px; margin-right: 20px"><p>PC</p></div><p>Price: </p> <p id="p1">' + products["011"].price * products["011"].amount + ' </p><button class="minus" data-id="011" style="height:15px; margin-top:17px; margin-left:60%; margin-right:6px">-</button><p id="c1">' + products["011"].amount + '</p><button class="plus" data-id="011" style="height:15px; margin-top:17px; margin-right:6px;">+</button><button class="delete" data-id="011" style="height:15px; margin-top:17px">delete</button></div ><script src="Script1.js"></script>';
        p.innerHTML = p.innerHTML + out;
    }
    const printSecond = () => {
        var out = '<div class="second" style=" display: flex; flex-direction: row; position:relative; background-color: #eee; border:1px solid black"> <img src="https://cdn3.iconfinder.com/data/icons/flat-set-1/64/flat_set_1-25-128.png" style="width:20px; height:20px; margin-left: 10px; margin-top:17px" />  <p style="margin-left: 20px; margin-right: 20px">Phone</p> <p> Price: </p> <p id="p2">' + products["022"].price * products["022"].amount + '</p> <button class="minus" data-id="022" style="height:15px; margin-top:17px; margin-left:57.4%; margin-right:6px">-</button><p id="c2">' + products["022"].amount + '</p><button class="plus" data-id="022" style="height:15px; margin-top:17px; margin-right:6px;">+</button>  <button class="delete" data-id="022" style="height:15px; margin-top:17px">delete</button> </div><script src="Script1.js"></script>';
        p.innerHTML = p.innerHTML + out;
    }
    const printThird = () => {
        var out = '<div class="third" style=" display: flex; flex-direction: row; position:relative; background-color: #eee; border:1px solid black"><img src = "https://cdn1.iconfinder.com/data/icons/video-game-8/512/g30807-128.png" style = "width:20px; height:20px; margin-left: 10px; margin-top:17px" /><div style="margin-left: 20px;"><p>Mouse</p></div><p style="margin-left: 20px;">Price: </p><p id="p3">' + products["033"].price * products["033"].amount + '</p><button class="minus" data-id="033" style="height:15px; margin-top:17px; margin-left:57%; margin-right:6px">-</button><p id="c3">' + products["033"].amount + '</p><button class="plus" data-id="033" style="height:15px; margin-top:17px; margin-right:6px;">+</button><button class="delete" data-id="033" style="height:15px; margin-top:17px">delete</button></div ><script src="Script1.js"></script>';
        p.innerHTML = p.innerHTML + out;
    }
    const printFourth = () => {
        var out = ' <div class="fourth" style=" display: flex; flex-direction: row; position:relative; background-color: #eee; border:1px solid black"><img src = "https://cdn2.iconfinder.com/data/icons/gaming-elements-2/64/Gaming_22-128.png" style = "width:20px; height:20px; margin-left: 10px; margin-top:17px" /><div style="margin-left: 20px;"><p>Kyeboard</p></div><p style="margin-left: 20px;">Price: </p><p id="p4">' + products["044"].price * products["044"].amount + '</p><button class="minus" data-id="044" style="height:15px; margin-top:17px; margin-left:54.6%; margin-right:6px">-</button><p id="c4">' + products["044"].amount + '</p><button class="plus" data-id="044" style="height:15px; margin-top:17px; margin-right:6px;">+</button><button class="delete" data-id="044" style="height:15px; margin-top:17px">delete</button></div ><script src="Script1.js"></script>';
        p.innerHTML = p.innerHTML + out;
}
const func = () => {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            printFirst();
        }
        if (arr[i] == 2) {
            printSecond();
        }
        if (arr[i] == 3) {
            printThird();
        }
        if (arr[i] == 4) {
            printFourth();
        }
    }
}