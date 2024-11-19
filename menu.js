//Menu hambúrguer

const menu_alternar = document.getElementById('alternar_menu');

const menu = document.getElementById('itens_menu');

menu_alternar.addEventListener('click', () => {

    // Alternar as classes do menu
    menu.classList.toggle('open');

    menu_alternar.classList.toggle('open');

});