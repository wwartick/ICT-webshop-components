const activeCat = document.querySelectorAll('.category')

const changeActive = function(e) {
    const target=e.target;
    activeCat.forEach(category => category.classList.remove('active'));
    target.classList.add('active');
}

activeCat.forEach(category => category.addEventListener('click', changeActive));