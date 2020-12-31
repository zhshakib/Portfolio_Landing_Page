function toggle() {
    let sec = document.getElementById('sec');
    let nav = document.getElementById('navigation')
    sec.classList.toggle('active');
    nav.classList.toggle('active')
}

$(document).on('click', '#navigation ul li', function () {
    $(this).addClass('nav_active').siblings().removeClass('nav_active');
})