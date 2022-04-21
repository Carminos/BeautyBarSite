//  Group 1 Products Variables 
const merchModal = document.querySelector('.merchmodal');
const merchContent = document.querySelector('.merch-content');
const merchClose = document.querySelector('.merch-close');
const merchImg = document.querySelector('.merch-image');
const merchBrand = document.querySelector('.merch-brand');
const merchPrice = document.querySelector('.merch-price');
const merchDesc = document.querySelector('.merch-descripion');
const merchRead = document.querySelector('.merch-read');
const merchIng = document.querySelector('.merch-ingredients');
const productImage = document.querySelectorAll('.product-image');
const images = document.getElementById('img');
const star = document.getElementById('star');

//  Group 2 Products Variables
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');
const modalImg = document.querySelector('.modal-image');
const modalBrand = document.querySelector('.modal-brand');
const modalPrice = document.querySelector('.modal-price');
const modalDesc = document.querySelector('.modal-descripion');
const modalIng = document.querySelector('.modal-ingredients');

// Group 1 Products
const newItems = [
    {
        "id": "0",
        "img": "./images/prod1.jpg",
        "price": "$12.99",
        "name": "Cetaphil Daily Cleanser",
        "rating": "4.8 (out of 450 reviews)",
        "description": "Specially formulated gentle gel to foam formula deep cleans and minimizes the appearance of pores without stripping skin of natural moisture."
    },
    {
        "id": "1",
        "img": "./images/products4.jpg",
        "price": "$66.00",
        "name": "Skinceutials CE Ferulic",
        "rating": "4.7 (3245 reviews)",
        "description": "C E Ferulic features a synergistic antioxidant combination of 15% pure vitamin C (L-ascorbic acid), 1% vitamin E (alpha tocopherol), and 0.5% ferulic acid to enhance protection against environmental damage caused by free radicals that can contribute to atmospheric aging."
    },
    {
        "id": "2",
        "img": "./images/prod3.jpg",
        "price": "$4.99",
        "name": "Olay Cleanser",
        "description": "Specially formulated to cleanse, refresh and address the needs of sensitive skin. Take care of delicate skin daily with a fragrance-free formula that removes 2x more dirt, oil and makeup than the leading beauty bar. The rich, foamy lather leaves skin looking clear and blemish free."
    },
    {
        "id": "3",
        "img": "./images/prod2.jpg", 
        "price": "$5.30",
        "name": "elf Daily Face Cleanser",
        "description": "Gentle cleanser removes everyday impurities, dirt, and makeup for skin that feels clean and renewed. Infused with Purified Water to help hydrate the skin with a refreshing splash of moisture. How to Use: Dampen hands and skin with warm water and dispense a small portion of cleanser onto the fingers."
    },
    {
        "id": "4",
        "img": "./images/products3.jpg",
        "price": "$14.99",
        "name": "Versed Skin Cleanser",
        "description": "Deep Cleanse is a mild and exfoliating cleanser that soothes unbalanced skin and calms temporary redness and discomfort. The long-term result is the appearance of cleansed, clarified, and softened skin."
    },
    {
        "id": "5",
        "img": "./images/products6.jpg",
        "price": "$77.89",
        "name": "Ole Henriksen Banana Bright",
        "description": "Banana Bright Eye Crème brightens, instantly targets fine lines and wrinkles and reduces the look of dark circles, delivering age-defying results. Collagen-boosted, it firms and deeply hydrates even as it feels deliciously lightweight. Formulated with powerful vitamin C, it helps revive and illuminate the entire eye area over time."
    },
    {
        "id": "6",
        "img": "./images/products7.jpg",
        "price": "$80.00",
        "name": "Drunk Elephant T.L.C. Sukari",
        "description": "This next-generation mask works to smooth skin texture and minimise the appearance of fine lines, wrinkles and pores. Its unique formula contains pumpkin ferment, chickpea flour and a soothing antioxidant blend that combines milk thistle, apple and matcha tea. Contains AHA + BHA."
    }
] 

// Display Group 1 Products
let createHTML = '';
    newItems.map((item, index) => {
        createHTML += `
        <div id = '${index}' onclick = 'newModal(event)' class="product-card">
            <div class="product-image">
                <img id="image" src="${item.img}" alt="">
                <span class="new-price">${item.price}</span>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${item.name}</h2>
            </div>
        </div>
        `
    })
    document.querySelector('.product-container').innerHTML = createHTML;

function newModal(event){
    // console.log(event.target.parentNode.parentNode)
    let card = event.target.parentNode.parentNode
    // console.log(card)
    let index = parseInt(card.id)
    let object = newItems[index]
    // console.log(object)
    let brand = object.name 
    document.querySelector('.merch-brand').innerText = brand;
    let cost = object.price
    document.querySelector('.merch-price').innerText = cost;
    let rating = object.rating
    document.querySelector('.review').innerText = rating;
    let description = object.description
    document.querySelector('.merch-description').innerText = description;
    let picture = object.img
    document.querySelector('#merch-image').src = picture;
        merchModal.style.display = "block";
        merchClose.onclick = function(){
        merchModal.style.display = "none";
        };
    };


// Group 2 Products
const products = [
    {
        "id": "0",
        "img": "./images/prod4.jpg",
        "price": "$23.00",
        "name": "Laneige Cleanser",
        "description": "Contains blueberry extract",
        "text": "This deep cleanser contains cellulose beads to gently remove dead skin cells while removing built up sebum and clogged pores. Use daily to remove impurities and brighten skin. Apply on wet face and rinse with lukewarm water.",
        "ingredients": "Formulated with blueberry extracts and papain enzymes"
    },
    {
        "id": "1",
        "img": "./images/prod5.jpg",
        "price": "$25.00",
        "name": "Kiehl's Ultra Facial Cleanser",
        "description": "Tough on dirt, gentle on skin.", 
        "text": "This gentle facial cleanser helps remove dirt and debris without stripping skin of essential moisture. In addition to dissolving excess oil and dirt, this pH-balanced cleanser helps maintain skin’s natural balance and protection barrier.",
        "ingredients": "Formulated with Squalane, Avocado Oil, and Glycerin."
    },
    {
        "id": "2",
        "img": "./images/prod6.jpg",
        "price": "$37.00",
        "name": "Youth To The People Face Wash",
        "description": "Kale + Green Tea Superfood Cleanser",
        "text": "Antioxidant-packed, multifunction gel cleanser that's pH balanced, non-drying, and removes makeup with ease. Rich gel texture naturally lathers without sulfates and rinses quickly without stripping the skin. Gentle enough for all skin types and doubles as a makeup remover.",
        "ingredients": "Custom Superfoods Blend: Kale, spinach, green tea, alfalfa, vitamins C, E, K."
    },
    {
        "id": "3",
        "img": "./images/prod7.jpg",
        "price": "$28.29",
        "name": "Nivea Perfect and Radiant",
        "description": "SPF15 enriched with Vitamin E",
        "text": "Works to gradually enhance skin complexion and visibly reduce the appearance of dark marks, while protecting your skin from the harmful effects of the sun. The non-greasy, silky smooth formula is easily absorbed while providing your skin with lasting moisture, leaving it feeling soft and smooth.",
        "ingredients": "Contains Vitamin E"
    },
    {
        "id": "4",
        "img": "./images/prod8.jpg",  
        "price": "$11.99",
        "name": "BYOMA Creamy Jelly Cleanser",
        "description": "With Tri-Ceramide Complex",
        "text": "The lightweight, pH balanced formula transforms into a rich, creamy lather upon contact with warm water to cleanse without stripping skin of moisture or leaving a tight, dry feeling. Universally effective for all skin types, both morning and night.",
        "ingredients": "Contains Ceramides, green tea extract and antioxidant-rice licorice root."
    },
    {
        "id": "5",
        "img": "./images/prod9.jpg",  
        "price": "$15.87",
        "name": "Nuxe Berry Rose Oil",
        "description": "Micellar cleanser with rose petals",
        "text": "Removes make-up from face, eyes and lips. Cleanses, purifies and softens. Leaves skin clean, soft and comfortable.",
        "ingredients": "Contains rosa damascena flower water and petals"
    },
    {
        "id": "6", 
        "img": "./images/prod10.jpg",    
        "price": "$34.00",
        "name": "TimeWise Mary Kay",
        "description": "SPF30 Broad Spectrum Sunscreen",
        "text": "This nongreasy, quick-absorbing cream helps delay visible signs of skin aging while delivering broad spectrum UVA/UVB protection.",
        "ingredients": "Nopal Cactus Extract, Age Minimize 3D® Complex"
    },
    {
        "id": "7",
        "img": "./images/prod11.jpg",    
        "price": "$16.50",
        "name": "Simple Kind to Skin",
        "description": "100% soap-free",
        "text": "This Simple® Skincare moisturizing, 100% soap-free face wash gently washes away makeup, leaving sensitive skin feeling hydrated, soft and replenished.",
        "ingredients": "Contains Pro-Vitamin B5 and Vitamin E"
    },
    {
        "id": "8",
        "img": "./images/prod12.jpg",    
        "price": "$52.00",
        "name": "fresh Lotus Moisturizer",
        "description": "Smoothes fine lines and wrinkles",
        "text": "A lightweight antioxidant moisturizer that smoothes the look of fine lines and wrinkles while strengthening the skin's barrier for a more youthful look.",
        "ingredients": "Contains lotus, star fruit leaf extract "
    },
    {
        "id": "9",
        "img": "./images/prod13.jpg",    
        "price": "$12.00",
        "name": "elf, Holy Hydration!",
        "description": "Maintain's skin's moisture balance",
        "text": "The holy hydration! Face cream is your secret weapon to a flawless face. Give thirsty skin what it craves with this hydrating, fast-absorbing enriched cream.",
        "ingredients": "Packed with squalane, hyaluronic Acid, niacinamide and peptide complex."
    },
    {
        "id": "10",
        "img": "./images/prod14.jpg",      
        "price": "$39.99",
        "name": "Olay Regenerist Moisturizer",
        "description": "Light, refreshing citrus scent",
        "text": "Light & Refreshing Citrus-scented, silky, lightweight cream that melts into skin, does not clog pores, and leaves no greasy residue.", 
        "ingredients": "Contains vitamin C, vitamin B3 and lactic acid"
    },
    {
        "id": "11",
        "img": "./images/prod16.jpg",      
        "price": "$23.59",
        "name": "Olay Total Effects 7-in-1",
        "description": "Anti-Aging Daily Face Moisturizer",
        "text": "This nourishing Total Effects Face Moisturizer gives you seven benefits: it hydrates, replenishes, brightens, evens the look of tone, minimizes the look of pores, visibly firms and visibly smooths.",
        "ingredients": "VitaNiacin Complex II for healthy-looking skin"
    },
    {
        "id": "12",
        "img": "./images/prod15.jpg",      
        "price": "$75.00",
        "name": "Tatcha Brightening Serum", 
        "description": "For Acne Scars and Dark Spots",
        "text": "Reduce the appearance of dark spots, discoloration, and post-acne scarring from the source. It helps to diffuse accumulated excess melanin, a cause of hyperpigmentation, resulting in a visibly more even skin tone.",
        "ingredients": "Contains Vitamin C + 10% AHA serum"
    },
    {
        "id": "13",
        "img": "./images/prod17.jpg",        
        "price": "$24.99",
        "name": "Olay Vitamin C Mist",
        "description": "Facial Mist",
        "text": "Facial mist instantly absorbs to hydrate dull, dry & tight skin. Helps revitalize, refresh & energize skin to look bright & recharged.",
        "ingredients": "Contains vitamin C and bergamot"
    },
    {
        "id": "14",
        "img": "./images/prod18.jpg",          
        "price": "$5.00",
        "name": "Eye Bright Undereye", 
        "description": "Vitamin C Spot Serum",
        "text": "Our natural biocellulose eye patches are infused with Vitamin C and Marine plant extracts to bump up support, help brighten and boost hydration.",
        "ingredients": "Vitamin C & Kelp + Biocellulose patches"
    },
    {
        "id": "15",
        "img": "./images/prod19.jpg",          
        "price": "$2.99",
        "name": "Que Bella Pineapplee Mask",
        "description": "Hydrating Peel-off mask",
        "text": "Sodium hyaluronate is a super powerful moisturiser which helps to plump up the skin. The pineapple extract has both refreshing and moisturising properties, plus the sweet pineapple scent is absolutely delish!",
        "ingredients": "Contains sodium hyaluronate, sweet pineapple scent"
    },
    {
        "id": "16",
        "img": "./images/prod20.jpg",             
        "price": "$2.99",
        "name": "Que Bella Lavendar Mud Mask",
        "description": "With calming lavendar",
        "text": "The lavender scent and infusion will calm and relax your soul, while the mask will cleanse your skin and balance your skin tone. This soothing face mask was designed to ease your stress and tension from another long day of killing it! The ingredients work to soften and enrich your skin, making it the perfect face mask for normal and combination skin types.",
        "ingredients": "Enriched with cocoa, shea butters and calming lavendar"
    },
    {
        "id": "17",
        "img": "./images/prod15.jpg",      
        "price": "$75.00",
        "name": "Tatcha Brightening Serum", 
        "description": "For Acne Scars and Dark Spots",
        "text": "Reduce the appearance of dark spots, discoloration, and post-acne scarring from the source. It helps to diffuse accumulated excess melanin, a cause of hyperpigmentation, resulting in a visibly more even skin tone.",
        "ingredients": "Contains Vitamin C + 10% AHA serum"
    },
    {
        "id": "18",
        "img": "./images/prod9.jpg",  
        "price": "$15.87",
        "name": "Nuxe Berry Rose Oil",
        "description": "Micellar cleanser with rose petals",
        "text": "Removes make-up from face, eyes and lips. Cleanses, purifies and softens. Leaves skin clean, soft and comfortable.",
        "ingredients": "Contains rosa damascena flower water and petals"
    },
    {
        "id": "19",
        "img": "./images/prod9.jpg",  
        "price": "$15.87",
        "name": "Nuxe Berry Rose Oil",
        "description": "Micellar cleanser with rose petals",
        "text": "Removes make-up from face, eyes and lips. Cleanses, purifies and softens. Leaves skin clean, soft and comfortable.",
        "ingredients": "Contains rosa damascena flower water and petals"
    }
]

// Display Group 2 Products
let html = '';
    products.map((product, index) => {
        html += `
        <div id= '${index}' onclick = 'createModal(event)' class="product-card">
            <div class="product-image">
                <img id="image" src="${product.img}" alt="">
                <span class="new-price">${product.price}</span>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${product.name}</h2>
            </div>
        </div>
        `
    })
    document.querySelector('.best-sellers').innerHTML = html;

function createModal(event){
    let card = event.target.parentNode.parentNode
    console.log(card)
    let index = parseInt(card.id)
    let object = products[index]
    console.log(object)
    let modBrand = object.name 
    document.querySelector('.modal-brand').innerText = modBrand;
    let moCost = object.price
    document.querySelector('.modal-price').innerText = moCost;
    let moRating = object.rating
    document.querySelector('.review').innerText = moRating;
    let moDescription = object.description
    document.querySelector('.modal-description').innerText = moDescription;
    let moPicture = object.img
    document.querySelector('#modal-image').src = moPicture;
        modal.style.display = "block";
        modalClose.onclick = function() {
        modal.style.display = "none";
        };
    };
    
// STEP 2: Use forEach method to loop through all the ['.product-images'] in the DOM 
// and add an event listener to display modal.

// Method 1: for loop
// const productImage = document.querySelectorAll('.product-image');
// for (let i=0; i<productImage.length; i++) {
//     productImage[i].addEventListener('click', (e) => {
//         console.log('BOOM! Image clicked');
//     });
// });


// Create HTML Modal for Group 1 Products

// let merchmodalHTML = '';

// merchmodalHTML = `
//     <div class="merch-content">
//         <i class ="merch-close fa-solid fa-xmark"></i>
//         <div class="merch-leftside">
//             <img id="merch-image" src="${item.img}" alt="image">
//             <i id="star" class="fa-regular fa-star"></i>        
//         </div>
//         <div class="merch-rightside">
//             <div class="merch-detail">            
//                 <h2 class="merch-brand">${item.name}</h2>
//                 <h4 class="subtext">All Skin Types, including Sensitive Skin</h4>
//                 <p class="merch-description">${item.description}</p>
//             <div class="reviews">
//                 <i id="rating" class="fa-regular fa-star"></i>        
//                 <i id="rating" class="fa-regular fa-star"></i>        
//                 <i id="rating" class="fa-regular fa-star"></i>        
//                 <i id="rating" class="fa-regular fa-star"></i>        
//                 <h4 class="review">${item.rating}</h4>
//             </div>
//                 <h3 class="merch-price">${item.price}</h3>
//             <span class="buttons">
//                 <span class="quantity">
//                 <p>Quantity</p>
//                     <span class="units">0</span>
//                     <span class="add">+</span>
//                 </span>                    
//                 <span class="merch-buyBtn">Add to Cart</span>
//                 <span class="merch-wishBtn">Add to Wishlist</span>
//             </span>
//         </div>
//     </div>
//     `
// document.querySelector('.merchmodal').innerHTML = merchmodalHTML;


