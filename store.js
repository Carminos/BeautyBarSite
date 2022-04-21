// Declare Variables
const removeBtn = document.querySelectorAll('.remove');
const cartContainer = document.querySelector('.cart-content');  
const cartItems = document.querySelectorAll('.cart-item')
// const cartPrice = document.querySelectorAll('.price')
// const quantity = document.querySelectorAll('.number');
const merchBuy = document.querySelectorAll('.merch-buyBtn');
const modalBuy = document.querySelectorAll('.modal-buyBtn');
const cartOverlay = document.querySelector('.cart-overlay');
const closeOverlay = document.querySelector('.close-cart');

// (1) Function to close cart 
function closeCart(){
	closeOverlay.addEventListener('click', function () {
		console.log('Cart closed')
		cartOverlay.style.display = 'none';
	})
}

// (1) Function to add [merchBuy] items to cart
for (let i = 0; i < merchBuy.length; i++) {
	merchBuy[i].addEventListener('click', function () { 
		console.log('item added to cart')
		cartOverlay.style.display = 'block';
		merchModal.style.display = "none";
		closeOverlay.onclick = function() {
			cartOverlay.style.display = "none";
			}	
		})
	}


for (let i = 0; i < merchBuy.length; i++) {
	merchBuy[i].addEventListener('click', addToCart)
}

function addToCart(event){

	let btn = event.target
	// console.log(btn)
	let btnParent = btn.parentElement
	console.log(btnParent)
	let btnGrandParent = btn.parentElement.parentElement
	console.log(btnGrandParent)
	let btnGreatGrandParent = btn.parentElement.parentElement.parentElement.parentElement
	console.log(btnGreatGrandParent)
	let itemName = btnGrandParent.children[0].innerText
	let itemImage = btnGreatGrandParent.children[0].src
	let itemPrice = btnParent.children[0].innerText

	let itemContainer = document.createElement('tr')

	itemContainer.innerHTML = `
		<div class="cart-row">
			<div class="cart-item">
				<img id="image" src="${itemImage}" alt="">
				<div>
					<h4>${itemName}</h4>              
					<button class="remove" onclick ='removeItem(event)'>Remove</button>
				</div>  
				<div> 
					<button id="down">-</button>  
					<span class="number">0</span>
					<button id="up">+</button>
					<h5 class="price">${itemPrice}</h5>
				</div>
			</div>
		</div>
		`
    cartContainer.append(itemContainer)
}

// (2) Function to add [modalBuy] items to cart

for (let i = 0; i < modalBuy.length; i++) {
	modalBuy[i].addEventListener('click', function () { 
 		console.log('this item added to cart') 
		cartOverlay.style.display = 'block';
		modal.style.display = "none";
        closeOverlay.onclick = function() {
			cartOverlay.style.display = "none";
			}
		})
	};


	for (let i = 0; i < modalBuy.length; i++) {
		modalBuy[i].addEventListener('click', addMoreToCart)
	}

	function addMoreToCart(event){
		let modalbtn = event.target
		console.log(modalbtn)
		let modalbtnParent = modalbtn.parentElement
		console.log(modalbtnParent)
		let modalbtnGrandParent = modalbtn.parentElement.parentElement
		console.log(modalbtnGrandParent)
		let modalbtnGreatGrandParent = modalbtn.parentElement.parentElement.parentElement.parentElement
		console.log(modalbtnGreatGrandParent)
		let modalItemName = modalbtnGrandParent.children[0].innerText
		let modalItemImage = modalbtnGreatGrandParent.children[0].src
		let modalItemPrice = modalbtnParent.children[0].innerText

		let itemContainer = document.createElement('tr')

		itemContainer.innerHTML = `
			<div class="cart-row">
				<div class="cart-item">
					<img id="image" src="${modalItemImage}" alt="">
					<div>
						<h4>${modalItemName}</h4>              
						<button class="remove" onclick ='removeItem(event)'>Remove</button>
					</div>  
					<div> 
						<button id="down">-</button>  
						<span class="number">0</span>
						<button id="up">+</button>
						<h5 class="price">${modalItemPrice}</h5>
					</div>
				</div>
			</div>
			`
    	cartContainer.append(itemContainer)
	}

// (3) Function to remove items from cart
function removeItem (event) {
	console.log('Item will be removed')
	const buttonClicked = event.target
	buttonClicked.parentElement.parentElement.remove()
	// 		updateCartTotal()
}

