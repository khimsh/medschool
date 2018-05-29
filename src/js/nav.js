const subMenu = document.getElementById('subMenu');
const navBtn = document.querySelectorAll('.main-nav__btn');

navBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        subMenu.classList.toggle('open');
    })
})