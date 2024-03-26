// Menu
let show = true;
const menuContent = document.querySelector('.menu');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

// Mostruário 

const imagens = document.querySelectorAll('.imagem');
const imagemSelecionada = document.querySelector('.imagem-selecionada');

imagens.forEach(imagem => {
  imagem.addEventListener('mouseover', () => {
    // Define a imagem selecionada como a que o mouse está passando por cima
    imagemSelecionada.style.backgroundImage = `url(${imagem.src})`;
  });
});

// mostruário dos produtos




// carrossel

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

// Calculadora 

const seletorCalculadora = document.querySelector('.seletor__calculadora');
const labelEscolhax = document.querySelector('label[for="txtescolhax"]');
const labelEscolhay = document.querySelector('label[for="txtescolhay"]');
const labelValorFinal = document.querySelector('label[for="txtvtotal"]');

seletorCalculadora.addEventListener('change', function() {
  const escolha = this.value;
  labelEscolhax.textContent = escolha === 'opcao1' ? 'Centímetro (cm)' : 'Polegadas (in)';
  labelEscolhay.textContent = escolha === 'opcao1' ? 'Centímetro (cm)' : 'Polegadas (in)';
});


// teste

const larguraPisoCm = Number(txtcomprx.value);
const alturaPisoCm = Number(txtlargy.value);

seletorCalculadora.addEventListener('change', function() {
  const escolha = this.value;
  labelEscolhax.textContent = escolha === 'opcao1' ? 'Centímetro (cm)' : 'Polegadas (in)';
  labelEscolhay.textContent = escolha === 'opcao1' ? 'Centímetro (cm)' : 'Polegadas (in)';

 
  if (escolha === 'opcao1') {
    const cunhasPorMetroQuadrado = 1 / ((larguraPisoCm / 100) * (alturaPisoCm / 100)) * 4;
    const metrosQuadrados = Number(txtmq.value);
    const valorTotal = metrosQuadrados * cunhasPorMetroQuadrado;
    labelValorFinal.textContent = `${valorTotal} espaçadores`;

    console.log(`Quantidade de cunhas por metro quadrado: ${cunhasPorMetroQuadrado}`);
    
  } else {
    
  }
});











