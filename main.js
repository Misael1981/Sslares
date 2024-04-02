let show = true;
const menuContent = document.querySelector('.menu');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})


/* Slides */

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 4000,  
    }, 
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});



let paragrafoUm = document.querySelector('#textone');

// Adiciona um evento de hover ao invés de clique
abstract.addEventListener('mouseenter', function() {
    // Altera a classe do elemento .abstract para adicionar margem inferior
    abstract.classList.add('abstract-open');

    // Define o conteúdo do parágrafo dentro do espaço aberto
    paragrafoUm.innerHTML = "Seu texto aqui";
});

// Remove a classe e limpa o parágrafo quando o mouse sai
abstract.addEventListener('mouseleave', function() {
    // Remove a classe que adiciona a margem inferior
    abstract.classList.remove('abstract-open');

    // Limpa o conteúdo do parágrafo
    paragrafoUm.innerHTML = "";
});

// Modal

const openModalButton = document.querySelector("#open-modal"); // Abrir Modal
const closeModalButton = document.querySelector("#close-modal"); // Fechar Modal 
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});