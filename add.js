// Menu
let show = true;
const menuContent = document.querySelector('.menu');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

// Descrição dos Produtos

// Seleionador de Imagem

const imagensSelecionaveis = document.querySelectorAll('.descricao-produtos__imagem-selecionavel img');
const imagemCunhaSlim = document.querySelector('.cunhaSlim');
const imagemCunhaNiveladora = document.querySelector('.cunhaNiveladora');


imagensSelecionaveis.forEach(imagem => {
  imagem.addEventListener('click', () => {
    
    imagemCunhaSlim.src = imagem.src;
    imagemCunhaNiveladora.src = imagem.src;
  });
});

//Seletor de Produto

function showElement(id) {
  let element = document.getElementById(id);
  element.style.display = 'block';
}

function hideAllElements() {
  let elements = document.querySelectorAll('.your-element-class'); // substitua 'your-element-class' pela classe dos elementos que devem ser controlados
  elements.forEach(function(element) {
    element.style.display = 'none';
  });
}

document.getElementById('linkCunhaSlim').addEventListener('click', function() {
  hideAllElements();
  showElement('cunhaSlim');
});

document.getElementById('linkCunhaNiveladora').addEventListener('click', function() {
  hideAllElements();
  showElement('cunhaNiveladora');
});

document.getElementById('linkDesempenadeiraEspuma').addEventListener('click', function() {
  hideAllElements();
  showElement('desempenadeiraEspuma');
});



/* 

    document.getElementById('linkCunhaSlim').addEventListener('click', function() {
    let cunhaSlim = document.getElementById('cunhaSlim');
    cunhaSlim.style.display = 'block';
  });

  document.getElementById('linkCunhaNiveladora').addEventListener('click', function() {
    let cunhaNiveladora = document.getElementById('cunhaNiveladora');
    cunhaNiveladora.style.display = 'block';
  });

  document.getElementById('linkDesempenadeiraEspuma').addEventListener('click', function() {
    let desempenadeiraEspuma = document.getElementById('desempenadeiraEspuma');
    desempenadeiraEspuma.style.display = 'block';
  });
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
        slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
    2000: {
      slidesPerView: 6,
    },
},
});

// Calculadora 
 
const seletorCalculadora = document.querySelector('.seletor__calculadora');
const labelEscolhax = document.querySelector('label[for="txtescolhax"]');
const labelEscolhay = document.querySelector('label[for="txtescolhay"]');
const labelValorFinal = document.querySelector('label[for="txtvtotal"]');
const seletorCalculadoraModal = document.querySelector('.seletor__calculadora-modal');
const labelEscolhaxModal = document.querySelector('label[for="txtescolhamodalx"]');
const labelEscolhayModal = document.querySelector('label[for="txtescolhamodaly"]');
const labelValorFinalModal = document.querySelector('label[for="txtvmodaltotal"]');

seletorCalculadora.addEventListener('change', function() {
  const escolha = this.value;
  labelEscolhax.textContent = escolha === 'opcao1' ? 'Centímetro (cm)' : 'Polegadas (in)';
  labelEscolhay.textContent = escolha === 'opcao1' ? 'Centímetro (cm)' : 'Polegadas (in)';
});

//Comprimento X

function calcularEspacadoresx() {
  
  var comprimento = parseFloat(document.getElementById("txtcomprx").value);
  var comprimentoModal = parseFloat(document.getElementById("txtcomprmodalx").value);
  if (comprimento && comprimento > 0 || comprimentoModal && comprimentoModal > 0) {
      var espacadores = 0;

      if (comprimento <= 40 || comprimentoModal <= 40) {
          espacadores = 1;
      } else {
          espacadores = Math.ceil(comprimento / 27); 
      }

      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Número de espaçadores necessários: " + espacadores;
      document.querySelector(".caluladora__item[for='txtcalcmodalx']").innerText = "Número de espaçadores necessários: " + espacadores;
      
  } else {
      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Por favor, insira um comprimento válido.";
      document.querySelector(".caluladora__item[for='txtcomprmodalx']").innerText = "Por favor, insira um comprimento válido.";
  }
}

// Associando a função de cálculo ao evento de alteração do campo de entrada txtcomprx
document.getElementById("txtcomprx").addEventListener("change", calcularEspacadoresx);
document.getElementById("txtcomprmodalx").addEventListener("change", calcularEspacadoresx);



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






  






















