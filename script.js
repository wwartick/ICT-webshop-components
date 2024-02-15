const activeCat = document.querySelectorAll('.category')
let slideIndex=1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex +=n);
}

function showDivs(n) {
    var i; 
    var allProducts = document.getElementsByClassName('products')
    if (n > allProducts.length) {slideIndex = 1}
    if (n < 1) {slideIndex = allProducts.length} ;
    for (i = 0; i < allProducts.length; i++) {
    allProducts[i].style.display = "none";
  }
    allProducts[slideIndex-1].style.display = "block";

}

const changeActive = function(e) {
    const target=e.target;
    activeCat.forEach(category => category.classList.remove('active'));
    target.classList.add('active');
}

activeCat.forEach(category => category.addEventListener('click', changeActive));