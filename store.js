if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){

    let removeCartItemBtn = document.getElementsByClassName('btn-danger');
    for(i =0 ; i < removeCartItemBtn.length; i++){
        let button = removeCartItemBtn[i];
        button.addEventListener('click', removeCartItem)
    }

    
    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(i =0 ; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    
    let addToCartButton = document.getElementsByClassName('shop-item-button');
    for(i =0 ; i < addToCartButton.length; i++){
        var button = addToCartButton[i];
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked(){
    alert('Thank you for your purchase');
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title,price,imgSrc);
    updateCartTotal();
}

function addItemToCart(title,price,imgSrc){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemName = cartItems.getElementsByClassName('cart-item-title');
    for(i=0; i < cartItemName.length; i++){
        if (cartItemName[i].innerText == title){
            alert('This Item is already added to the cart');
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img src="${imgSrc}" width="50" height="50" />
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click' , removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');

    var total = 0;
    for(i=0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        console.log(priceElement)
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = priceElement.innerText;
        var quantity = quantityElement.value;
        total = total+ (price * quantity);
        
    }
    total = Math.round(total * 100 ) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;

}
