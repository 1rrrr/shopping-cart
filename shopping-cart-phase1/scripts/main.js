// show thumbnail image
var images = document.querySelectorAll('.choose-thumbnail');

images.forEach(function(image){
    image.addEventListener('mouseover', function(){
        var largeImage = document.getElementById('large-image');
        largeImage.src = image.src;
    })
});

// choose product color
var listColors = document.querySelectorAll('#several-color li');
var chooseColor = ['hotpink', 'orange', 'yellow', 'green', 'paleturquoise', 'white', 'black'];

for (var i = 0 ; i < listColors.length ; i++){
    listColors[i].style.backgroundColor = chooseColor[i];
}

// choose product size
var listSizes = document.querySelectorAll('.specific-size');

listSizes.forEach(size => {
    size.addEventListener('click', () => {
        listSizes.forEach(sz => {
            sz.classList.remove('active');
        });
        size.classList.add('active');
    });
});

// choose product quantity
const numberDisplay = document.getElementById('number-display');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

let number = 1
const minValue = 1;

btnUp.addEventListener('click', () => {
    number++;
    updateNumberDisplay();
});

btnDown.addEventListener('click', () => {
    if (number > minValue){
        number--;
        updateNumberDisplay();
    }
    
});

function updateNumberDisplay(){
    numberDisplay.textContent = number;
}

// CSS hover shopping list
const cartIcon = document.querySelector('.total-nav-cart');
const productInfo = document.querySelector('.cart-details');

let timeoutId;

cartIcon.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    productInfo.style.display = 'block';
  });

cartIcon.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        productInfo.addEventListener('mouseleave', () => {
            productInfo.style.display = 'none'
        });
    }, 300);
});

productInfo.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
})

productInfo.addEventListener('mouseleave', () => {
    productInfo.style.display = 'none';
})