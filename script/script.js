const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () =>{
            nav.classList.add('active');
        }
        )
    }
    if (close) {
        close.addEventListener('click', () =>{
            nav.classList.remove('active');
        }
        )
    }
 
                  //  navi9gationh ends here 




const bigItems = document.querySelectorAll('.p-con');
let currentEnlargedItem = null;

bigItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove the 'p-con-enlarge' class from the previously clicked element
    if (currentEnlargedItem) {
      currentEnlargedItem.classList.remove('p-con-enlarge');
    }

    // Add the 'p-con-enlarge' class to the clicked element
    item.classList.add('p-con-enlarge');

    // Update the currently enlarged item to the clicked element
    currentEnlargedItem = item;
  });
});
// Get the p-con and p-con-enlarge elements
const pCon = document.querySelector('.p-con');
const pConEnlarge = document.querySelector('.p-con-enlarge');

// Add a click event listener to p-con
pCon.addEventListener('click', function() {
    // Toggle the display of p-con-enlarge
    if (pConEnlarge.style.display === 'none' || pConEnlarge.style.display === '') {
        pConEnlarge.style.display = 'block'; // Show p-con-enlarge
    } else {
        pConEnlarge.style.display = 'none'; // Hide p-con-enlarge
    }
});
               





//                         // prodetails code start here 
// let mainImg = document.getElementById("main-img-src");
// let smallImg = document.getElementsByClassName("small-img-src");
// let shoppm = document.getElementById("shop-p-m");
// let shoppmSrc = shoppm.src;

// smallImg[0].onclick = function () {
//   mainImg.src = smallImg[0].src;
// };
// smallImg[1].onclick = function () {
//   mainImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = function () {
//   mainImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = function () {
//   mainImg.src = smallImg[3].src;
// };


// shoppm.onclick =  function () {
//   mainImg.src = shoppm.src;
// }; // call the function when the shop-p-m is clicked to get the product details and update the main image source.  // prodetails code ends here
 

// function getProduct (){
//  mainImg.src = shoppm.src;
  
// }
// console.log(shoppmSrc);

 /* Preloader */
 document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
      preloader.style.display = "none";
  }, 1000);    });















// Select elements
let mainImg = document.getElementById("main-img-src");
let smallImgs = document.getElementsByClassName("small-img-src");
let shoppm = document.getElementById("shop-p-m");

// Function to update the main image source
function updateMainImage(src) {
  if (mainImg) {
    mainImg.src = src;
  } else {
    console.error("Main image element not found.");
  }
}

// Add click event listeners for small images
for (let i = 0; i < smallImgs.length; i++) {
  smallImgs[i].onclick = function () {
    updateMainImage(smallImgs[i].src);
  };
}

// Add click event listener for the shop image
if (shoppm) {
  shoppm.onclick = function () {
    updateMainImage(shoppm.src);
  };
} else {
  console.error("Shop image element not found.");
}

// Log the source of the shop image
console.log(shoppm ? shoppm.src : "Shop image not found.");








// const productContainers = document.querySelectorAll('.p-con');

// productContainers.forEach(container => {
//     container.addEventListener('click', () => {
//         const productName = container.dataset.name;
//         const productPrice = container.dataset.price;
//         const productImage = container.dataset.image;
//         const productDescription = container.dataset.description;

//         // Update the single product page with the details of the clicked product
//         // Navigate to the single product page
//         window.location.href = `singleproduct.html?name=${productName}&price=${productPrice}&image=${productImage}&description=${productDescription}`;
//     });
// });

// const urlParams = new URLSearchParams(window.location.search);
// const productName = urlParams.get('name');
// const productPrice = urlParams.get('price');
// const productImage = urlParams.get('image');
// const productDescription = urlParams.get('description');

// // Update the DOM elements on the single product page with the retrieved data
// document.getElementById('main-img-src').src = productImage;
// document.querySelector('.details h4').textContent = productName;
// document.querySelector('.details h2').textContent = productPrice;
// document.querySelector('.details span').textContent = productDescription;


