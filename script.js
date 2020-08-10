const products = [
    {
        id: 1,
        name : 'Margerita',
        category: 'Best Sellers',
        size: 'Large',
        choice: 'Foodies choice',
        price: 16.00,
        image: 'https://i2.wp.com/allourway.com/wp-content/uploads/2014/04/Perfect-Pizza-crust_600.jpg',
        add: false,
        foodType: 'non-veg',
        filter: 'Top Rated',
        rating:5,
        calories:'calories',
        quickies: true,
        hot:false,
        spicy:false,
        catagory: 'pizza',
        all: true
    },
    {
        id: 2,
        name : 'Margerita Crudo',
        category: 'Best Sellers',
        size: 'Medium',
        choice: 'Chef choice',
        price: 12.50,
        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg',
        add: false,
        foodType: 'non-veg',
        filter:'Top Rated',
        rating:2,
        calories:'calories',
        quickies: true,
        hot:false,
        spicy:false,
        catagory: 'pizza',
        all: true
    },
    { 
        id: 3,
        name : 'Quattro Stagioni',
        category: 'Best Sellers',
        size: 'Small',
        choice: 'Best Seller',
        price: 10.25,
        image: 'https://media1.s-nbcnews.com/i/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.jpg',
        add: false,
        foodType: 'non-veg',
        filter:'',
        rating:5,
        calories:'calories',
        quickies: false,
        hot:false,
        spicy:false,
        catagory: 'Burger',
        all: true
    },
    { 
        id: 4,
        name : 'Frutti di Mare',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 10.25,
        image: 'https://i2.wp.com/allourway.com/wp-content/uploads/2014/04/Perfect-Pizza-crust_600.jpg',
        add: false,
        foodType: 'non-veg',
        filter:'',
        rating:1,
        calories:'',
        quickies: false,
        hot:true,
        spicy:true,
        catagory: 'Best Seller',
        all: true
    },
    { 
        id: 5,
        name : 'Cabonara',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 11.20,
        image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg',
        add: false,
        foodType: 'veg',
        filter:'',
        rating:4,
        calories:'',
        quickies: false,
        hot:true,
        spicy:true,
        catagory: 'Best Seller',
        all: true
    },
    {
        id: 6,
        name : 'Margerita 2',
        category: 'Best Sellers',
        size: 'Large',
        choice: 'Foodies choice',
        price: 16.00,
        image: 'https://www.seriouseats.com/recipes/images/2016/06/20110516-cowboy-steak-kenji-lopez-alt-1500x1125.jpg',
        add: false,
        foodType: 'non-veg',
        filter: 'Top Rated',
        rating:5,
        calories:'calories',
        quickies: true,
        hot:false,
        spicy:true,
        catagory: 'Steaks',
        all: true
    },
    {
        id: 7,
        name : 'Margerita Crudo 2',
        category: 'Best Sellers',
        size: 'Medium',
        choice: 'Chef choice',
        price: 12.50,
        image: 'https://www.kansascitysteaks.com/dyn-images/pdp_hero/Ribeye_-_overhead_cr-b8468f0e3846ee996d4e9f3f92fafec1.jpg',
        add: false,
        foodType: 'non-veg',
        filter:'Top Rated',
        rating:2,
        calories:'calories',
        quickies: true,
        hot:true,
        spicy:false,
        catagory: 'Steak',
        all: true
    },
    { 
        id: 8,
        name : 'Quattro Stagioni 2',
        category: 'Best Sellers',
        size: 'Small',
        choice: 'Best Seller',
        price: 10.25,
        image: 'https://i.pinimg.com/564x/a3/59/a4/a359a4d229f6d273294e0494d7c64027.jpg',
        add: false,
        foodType: 'non-veg',
        filter:'',
        rating:5,
        calories:'calories',
        quickies: false,
        hot:false,
        spicy:false,
        catagory: 'Kababs',
        all: true
    },
    { 
        id: 9,
        name : 'Frutti di Mare 2',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 10.25,
        image: 'https://i.pinimg.com/originals/c0/fd/79/c0fd794ca4abc37463f16811ab5d7fe4.jpg',
        add: false,
        foodType: 'non-veg',
        filter:'',
        rating:1,
        calories:'',
        quickies: false,
        hot:true,
        spicy:true,
        catagory: 'Kababs',
        all: true
    },
    { 
        id: 10,
        name : 'Cabonara 2',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 11.20,
        image: 'https://www.nj.com/resizer/Fy5Sgm51t4MlD1PWaF3J8SjlFU4=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/3WPDEHZW5JFPRH3VDDBTEDL2OE.jpg',
        add: false,
        foodType: 'veg',
        filter:'',
        rating:4,
        calories:'',
        quickies: false,
        hot:false,
        spicy:true,
        catagory: 'Snacks',
        all: true
    },
    { 
        id: 11,
        name : 'Cabonara 3',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 11.20,
        image: 'https://gbc-cdn-public-media.azureedge.net/img17614.1426x713.jpg',
        add: false,
        foodType: 'veg',
        filter:'',
        rating:4,
        calories:'',
        quickies: true,
        hot:false,
        spicy:true,
        catagory: 'Main Course',
        all: true
    },
    { 
        id: 12,
        name : 'Cabonara 4',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 11.20,
        image: 'https://img.delicious.com.au/qDM2WBAw/w759-h506-q80-cfill/del/2015/10/roast-pork-with-apple-and-apricot-stuffing-19303-2.jpg',
        add: false,
        foodType: 'veg',
        filter:'',
        rating:4,
        calories:'',
        quickies: false,
        hot:true,
        spicy:false,
        catagory: 'Main Course',
        all: true
    },
    { 
        id: 13,
        name : 'Cabonara 5',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 11.20,
        image: 'https://www.thespruceeats.com/thmb/cElpwPCsOsBaAZmPDt29hXkfyuQ=/2733x2733/smart/filters:no_upscale()/blt-wrap-sandwich-182911751-58adcacb5f9b58a3c9d16830.jpg',
        add: false,
        foodType: 'veg',
        filter:'',
        rating:4,
        calories:'',
        quickies: false,
        hot:true,
        spicy:true,
        catagory: 'Wraps',
        all: true
    },
    { 
        id: 14,
        name : 'Cabonara 6',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 11.20,
        image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-01/01/full/1546320860-9359.png',
        add: false,
        foodType: 'veg',
        filter:'',
        rating:4,
        calories:'',
        quickies: false,
        hot:false,
        spicy:false,
        catagory: 'Beverage',
        all: true
    },
    { 
        id: 15,
        name : 'Cabonara 7',
        category: 'Pizza',
        size: 'Small',
        choice: '',
        price: 11.20,
        image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-01/01/full/1546320860-9359.png',
        add: false,
        foodType: 'veg',
        filter:'',
        rating:4,
        calories:'',
        quickies: false,
        hot:false,
        spicy:false,
        catagory: 'Beverage',
        all: true
    }

];

const product = (prod) =>{
    return `
    <div class="card">
        <img class="card-img-top prodImg shop-item-image" src="${prod.image ? prod.image : ''}" >
        <div class="card-body">
            <h6 class="card-title shop-item-title">${prod.name}</h6>
            <p class="card-text">
                ${prod.category} - ${prod.size} <br/>
                ${prod.foodType} ${prod.choice} <br/>
                Catagory: ${prod.catagory} <br/>
                <strong>Price: </strong>$<span class="shop-item-price">${prod.price}</span>
                <br/>
                <a class="btn btn-primary shop-item-button">Add</a>
            </p>
        </div>
    </div>
    
   `
}

document.getElementById('listOfProducts').innerHTML = `${products.map(product).join('')}`

const filterToggle = () => {
    let x = document.getElementById("filterItem");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}
const searchToggle = () => {
    let x = document.getElementById("toggleInput");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      } 
}

//Filter based on choice of user in a particular order  

const getSortOrder = (prop) => {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    



const filterOnChoiceOrder = (choice) => {
	products.sort(getSortOrder(choice));
	document.getElementById('listOfProducts').innerHTML = `${products.map(product).join('')}`
}



//Filter based on choice of user 

const filterBytype = (foodType) => {
	var filteredProducts = products.filter(function (el) {
  		return el.foodType == foodType 
	});
	document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`		
}

const filterByCalories = (cal) => {
	var filteredProductsByCalories = products.filter(function (el) {
  		return el.calories == cal 
	});
	document.getElementById('listOfProducts').innerHTML = `${filteredProductsByCalories.map(product).join('')}`		
}

const filterByQuick = () => {
	var filteredProducts = products.filter(function (el) {
  		return el.quickies == true 
	});
	document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`		
}

const filterByHot = () => {
	var filteredProducts = products.filter(function (el) {
  		return el.hot == true 
	});
	document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`		
}
const filterBySpicy = () => {
	var filteredProducts = products.filter(function (el) {
  		return el.spicy == true 
	});
	document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`		
}

const catAll = () =>{
    var filteredProducts = products.filter(function (el) {
        return el.all === true
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catBest = (best) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === best
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catPizza = (pizza) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === pizza
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catsteak = (steak) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === steak
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catKababs = (ka) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === ka
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catSnack = (sn) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === sn
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catMain = (main) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === main
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catBurger = (bur) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === bur
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catWraps = (wr) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === wr
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}
const catBev = (bev) =>{
    var filteredProducts = products.filter(function (el) {
        return el.catagory === bev
  });
  document.getElementById('listOfProducts').innerHTML = `${filteredProducts.map(product).join('')}`
}