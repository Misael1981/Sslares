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

//Seletor de Produtos 

const data = [
  {
    title: 'Cunha',
    description: 'Cunha para nivelamento de pisos e revestimentos 50un',
    image: 'img/carrossel-loja/cunha-niveladora.jpg'
  },
  {
    title: 'Cunha Slim',
    description: 'Cunha para nivelamento de pisos e revestimentos 50un',
    image: 'img/carrossel-loja/cunhaslim-story.png'
  },
  {
    title: 'Desempenadeira Espuma',
    description: 'Desempenadeira com espuma 18X30',
    image: 'img/carrossel-loja/desempenadeira-espuma-story.png'
  },
  {
    title: 'Desempenadeira Lisa',
    description: 'Desempenadeira com lisa 18X30',
    image: 'img/carrossel-loja/desempenadeira-lisa-story.png'
  },
  {
    title: 'Desempenadeira Corrugada',
    description: 'Desempenadeira com corrugada 18X30',
    image: 'img/carrossel-loja/desempenadeira-corrugada-story.png'
  },
  {
    title: 'Espaçador Slim Padrão',
    description: 'Espaçador / Nivelador SLIM 3mm, 2mm, 1,5mm e 1mm PADRÃO',
    image: 'img/carrossel-loja/espacador-slim-padrao-story.png'
  },
  {
    title: 'Espaçador Slim PREMIUM',
    description: 'Espaçador / Nivelador SLIM 3mm, 2mm, 1,5mm e 1mm PREMIUM',
    image: 'img/carrossel-loja/espacador-slim-story.png'
  },
  {
    title: 'Espaçador Smart PADRÃO',
    description: 'Espaçador / Nivelador SMART 3mm, 2mm, 1,5mm e 1mm PADRÂO',
    image: 'img/carrossel-loja/espacador-smart-padrao-story.png'
  },
  {
    title: 'Espaçador Smart PREMIUM',
    description: 'Espaçador / Nivelador SMART 3mm, 2mm, 1,5mm e 1mm PREMIUM',
    image: 'img/carrossel-loja/espacador-smart-premium-story.png'
  },
  {
    title: 'Bloco de Espuma',
    description: 'Bloco de espuma 20x12',
    image: 'img/carrossel-loja/bloco-espuma-story.png'
  },
  {
    title: 'Ralo oculto',
    description: 'Ralo oculto 10X10 E 15X15, disponível em diversas cores',
    image: 'img/carrossel-loja/ralo-oculto-story.png'
  },
  {
    title: 'Ralo oculto "cores"',
    description: 'Ralo oculto 10X10 E 15X15, disponível em diversas cores',
    image: 'img/carrossel-loja/ralo-oculto-cores-story.png'
  },
  {
    title: 'Paflon',
    description: 'Luminária versátil, capaz de oferecer iluminação direta, indireta ou uma combinação de ambas.',
    image: 'img/carrossel-loja/paflon.png'
  }
];

const resultadoPesquisa = document.querySelector('.resultado__pesquisa');
const searchInput = document.querySelector('#searchInput');

const displayData = data => {
  resultadoPesquisa.innerHTML = '';
  data.forEach(e => {
    resultadoPesquisa.innerHTML += `
      <div>
        <a>${e.title}</a>
        <span>${e.description}</span>
      </div>
    `;
  });
}

searchInput.addEventListener("keyup", (e) =>{
  const search = data.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase()));
  displayData(search);
});

window.addEventListener("load", displayData.bind(null, data));

















/* 
const slide = document.querySelectorAll('.swiper-slide');
const searchInput = document.querySelector('#searchInput');

const displayData = data => {
  slide.innerHTML = '';
  data.forEach(e => {
    slide.innerHTML += `
    <div class= "swiper-slide">
      <a>${e.title}</a>
      <span>${e.description}</span>
    `
  })
}

searchInput.addEventListener("keyup", (e) =>{
  const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
  displayData(search);
})

window.addEventListener("load", displayData.bind(null, data));
*/




























































// carrossel

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 3,
    },
    991: {
        slidesPerView: 5,
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

//Comprimento X

function calcularEspacadoresx() {
  // Obtendo o valor digitado pelo usuário no campo de entrada
  var comprimento = parseFloat(document.getElementById("txtcomprx").value);

  // Verificando se o valor digitado é válido (não nulo e não negativo)
  if (comprimento && comprimento > 0) {
      var espacadores = 0;

      // Verificando se o comprimento é menor ou igual a 40cm
      if (comprimento <= 40) {
          // Para peças de até 40cm, 1 espaçador a cada 40cm
          espacadores = 1;
      } else {
          // Para peças maiores que 40cm, 1 espaçador a cada 27cm
          espacadores = Math.ceil(comprimento / 27); // Arredondando para cima para garantir que o número de espaçadores seja suficiente
      }

      // Atualizando o texto da label com o número de espaçadores
      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Número de espaçadores necessários: " + espacadores;
  } else {
      // Se o valor digitado não for válido, exibir uma mensagem de erro
      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Por favor, insira um comprimento válido.";
  }
}

// Associando a função de cálculo ao evento de alteração do campo de entrada txtcomprx
document.getElementById("txtcomprx").addEventListener("change", calcularEspacadoresx);


// Função para calcular o número de espaçadores em Y
function calcularEspacadoresy() {
  // Obtendo o valor digitado pelo usuário no campo de entrada
  var largura = parseFloat(document.getElementById("txtlargy").value);

  // Verificando se o valor digitado é válido (não nulo e não negativo)
  if (largura && largura > 0) {
      var espacadores = 0;

      // Verificando se a largura é menor ou igual a 40cm
      if (largura <= 40) {
          // Para peças de até 40cm, 1 espaçador a cada 40cm
          espacadores = 1;
      } else {
          // Para peças maiores que 40cm, 1 espaçador a cada 27cm
          espacadores = Math.ceil(largura / 27); // Arredondando para cima para garantir que o número de espaçadores seja suficiente
      }

      // Atualizando o texto da label com o número de espaçadores
      document.querySelector(".caluladora__item[for='txtcalcy']").innerText = "Número de espaçadores necessários: " + espacadores;
  } else {
      // Se o valor digitado não for válido, exibir uma mensagem de erro
      document.querySelector(".caluladora__item[for='txtcalcy']").innerText = "Por favor, insira uma largura válida.";
  }
}

// Associando a função de cálculo ao evento de alteração do campo de entrada txtlargy
document.getElementById("txtlargy").addEventListener("change", calcularEspacadoresy);

function calcularTotalEspacadores() {
  // Obtendo os valores digitados pelo usuário nos campos de entrada
  var comprimento = parseFloat(document.getElementById("txtcomprx").value);
  var largura = parseFloat(document.getElementById("txtlargy").value);
  var metrosQuadrados = parseFloat(document.getElementById("txtmq").value);

  // Verificando se os valores digitados são válidos (não nulos e não negativos)
  if (comprimento && comprimento > 0 && largura && largura > 0 && metrosQuadrados && metrosQuadrados > 0) {
    // Calculando a quantidade total de espaçadores com base na fórmula fornecida
    var totalEspacadores = Math.round((1 / ((largura / 100) * (comprimento / 100)) * 4) * metrosQuadrados);

    // Atualizando o texto da label com o número total de espaçadores
    document.querySelector(".caluladora__item[for='txtvtotal']").innerText = "Quantidade total de espaçadores: " + totalEspacadores;
  } else {
    // Se os valores digitados não forem válidos, exibir uma mensagem de erro
    document.querySelector(".caluladora__item[for='txtvtotal']").innerText = "Por favor, insira comprimento, largura e metros quadrados válidos.";
  }
}

// Associando a função de cálculo ao evento de alteração dos campos de entrada
document.getElementById("txtcomprx").addEventListener("change", calcularTotalEspacadores);
document.getElementById("txtlargy").addEventListener("change", calcularTotalEspacadores);
document.getElementById("txtmq").addEventListener("change", calcularTotalEspacadores);




// Polegadas


// Adicionando evento de mudança ao seletor de unidades
document.querySelector(".seletor__calculadora").addEventListener("change", function() {
  // Recalcular os espaçadores quando a unidade for alterada
  calcularEspacadoresx();
  calcularEspacadoresy();
  calcularTotalEspacadores();
});

// Função para converter centímetros para polegadas
function converterParaPolegadas(valorEmCm) {
  return valorEmCm / 2.54; // 1 polegada = 2.54 cm
}

// Função para calcular o número de espaçadores em X
function calcularEspacadoresx() {
  // Obtendo o valor digitado pelo usuário no campo de entrada
  var comprimento = parseFloat(document.getElementById("txtcomprx").value);
  var select = document.querySelector(".seletor__calculadora");

  // Verificando se o valor digitado é válido (não nulo e não negativo)
  if (comprimento && comprimento > 0) {
      var espacadores = 0;

      // Convertendo para polegadas, se a unidade selecionada for "Polegadas (in)"
      if (select.value === "opcao2") {
          comprimento = converterParaPolegadas(comprimento);
      }

      // Verificando se o comprimento é menor ou igual a 16 polegadas
      if (comprimento <= 16) {
          // Para peças de até 16 polegadas, 1 espaçador a cada 16 polegadas
          espacadores = 1;
      } else {
          // Para peças maiores que 16 polegadas, 1 espaçador a cada 11 polegadas
          espacadores = Math.ceil(comprimento / 11); // Arredondando para cima para garantir que o número de espaçadores seja suficiente
      }

      // Atualizando o texto da label com o número de espaçadores
      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Número de espaçadores necessários: " + espacadores;
  } else {
      // Se o valor digitado não for válido, exibir uma mensagem de erro
      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Por favor, insira um comprimento válido.";
  }
}

// Associando a função de cálculo ao evento de alteração do campo de entrada txtcomprx
document.getElementById("txtcomprx").addEventListener("change", calcularEspacadoresx);

// Função para calcular o número de espaçadores em Y
function calcularEspacadoresy() {
  // Obtendo o valor digitado pelo usuário no campo de entrada
  var largura = parseFloat(document.getElementById("txtlargy").value);
  var select = document.querySelector(".seletor__calculadora");

  // Verificando se o valor digitado é válido (não nulo e não negativo)
  if (largura && largura > 0) {
      var espacadores = 0;

      // Convertendo para polegadas, se a unidade selecionada for "Polegadas (in)"
      if (select.value === "opcao2") {
          largura = converterParaPolegadas(largura);
      }

      // Verificando se a largura é menor ou igual a 16 polegadas
      if (largura <= 16) {
          // Para peças de até 16 polegadas, 1 espaçador a cada 16 polegadas
          espacadores = 1;
      } else {
          // Para peças maiores que 16 polegadas, 1 espaçador a cada 11 polegadas
          espacadores = Math.ceil(largura / 11); // Arredondando para cima para garantir que o número de espaçadores seja suficiente
      }

      // Atualizando o texto da label com o número de espaçadores
      document.querySelector(".caluladora__item[for='txtcalcy']").innerText = "Número de espaçadores necessários: " + espacadores;
  } else {
      // Se o valor digitado não for válido, exibir uma mensagem de erro
      document.querySelector(".caluladora__item[for='txtcalcy']").innerText = "Por favor, insira uma largura válida.";
  }
}

// Associando a função de cálculo ao evento de alteração do campo de entrada txtlargy
document.getElementById("txtlargy").addEventListener("change", calcularEspacadoresy);

// Função para calcular a quantidade total de espaçadores
function calcularTotalEspacadores() {
  // Obtendo os valores digitados pelo usuário nos campos de entrada
  var comprimento = parseFloat(document.getElementById("txtcomprx").value);
  var largura = parseFloat(document.getElementById("txtlargy").value);
  var metrosQuadrados = parseFloat(document.getElementById("txtmq").value);
  var select = document.querySelector(".seletor__calculadora");

  // Verificando se os valores digitados são válidos (não nulos e não negativos)
  if (comprimento && comprimento > 0 && largura && largura > 0) {
      // Convertendo para polegadas, se a unidade selecionada for "Polegadas (in)"
      if (select.value === "opcao2") {
          comprimento = converterParaPolegadas(comprimento);
          largura = converterParaPolegadas(largura);
      }

      // Calculando a quantidade total de espaçadores com base na fórmula fornecida
      var totalEspacadores = Math.round((1 / ((largura / 100) * (comprimento / 100)) * 4) * metrosQuadrados);

      // Atualizando o texto da label com o número total de espaçadores
      document.querySelector(".caluladora__item[for='txtvtotal']").innerText = "Quantidade total de espaçadores: " + totalEspacadores;
  } else {
      // Se os valores digitados não forem válidos, exibir uma mensagem de erro
      document.querySelector(".caluladora__item[for='txtvtotal']").innerText = "Por favor, insira comprimento"
  }

}



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















