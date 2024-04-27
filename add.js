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

const produtos = {
  cunhaNiveladora: {
    imagem: "img/carrossel-loja/cunha-niveladora.jpg",
    titulo: "Cunha Niveladora",
    descricao: "A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável",
    quantidade: '50 peças',
    altura: 'Altura: 20mm',
    largura: 'Largura: 23mm',
    comprimento: 'Comprimento: 84mm',
  },
  cunhaSlim: {
    imagem: "img/carrossel-loja/cunhaslim-story.png",
    titulo: "Cunha Slim",
    descricao: "A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável",
    quantidade: '50 peças',
    altura: 'Altura: 20mm',
    largura: 'Largura: 23mm',
    comprimento: 'Comprimento: 84mm',
  },
  desempenadeiraEspuma: {
    imagem: "img/carrossel-loja/desempenadeira-espuma-story.png",
    titulo: "Desempenadeira Espuma",
    descricao: "A Desempenadeira com Espuma é utilizada para o nivelamento de massas, argamassas e monocapas. Ideal para acabamento em massa fina e reboco.",
    quantidade: 'Caixa com 6 unidades',
    altura: 'Altura: 8cm',
    largura: 'Largura: 18cm',
    comprimento: 'Comprimento: 30cm',
  },
  desempenadeiraLisa: {
    imagem: "img/carrossel-loja/desempenadeira-lisa-story.png",
    titulo: "Desempenadeira Lisa",
    descricao: "Indicada para a preparação, nivelamento e acabamento de superfícies, podendo-se utilizar variados tipos de massas, aplicação e desempeno de massa fina.",
    quantidade: 'Caixa com 6 unidades',
    altura: 'Altura: 5cm',
    largura: 'Largura: 18cm',
    comprimento: 'Comprimento: 30cm',
  },
  desempenadeiraCorrugada: {
    imagem: "img/carrossel-loja/desempenadeira-corrugada-story.png",
    titulo: "Desempenadeira Corrugada",
    descricao: "Indicada para preparar superfícies diversas, como planos acantonados, gesso de alvenaria e placas de forro. Por ter uma base corrugada, seu principal diferencial é a facilidade de remover partículas estranhas da massa.",
    quantidade: 'Caixa com 6 unidades',
    altura: 'Altura: 5cm',
    largura: 'Largura: 18cm',
    comprimento: 'Comprimento: 30cm',
  },
  espacadorSlimPadrao: {
    imagem: "img/carrossel-loja/espacador-slim-padrao-story.png",
    titulo: "Espaçador Slim PADRÃO",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 45mm',
    largura: 'Largura: 30mm',
    comprimento: 'Comprimento: 38mm',
  },
  espacadorSlimPremium: {
    imagem: "img/carrossel-loja/espacador-slim-story.png",
    titulo: "Espaçador Slim PREMIUM",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 45mm',
    largura: 'Largura: 30mm',
    comprimento: 'Comprimento: 38mm',
  },
  espacadorSmartPadrao: {
    imagem: "img/carrossel-loja/espacador-smart-padrao-story.png",
    titulo: "Espaçador Smart PADRÃO",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 45mm',
    largura: 'Largura: 30mm',
    comprimento: 'Comprimento: 38mm',
  },
  espacadorSmartPremium: {
    imagem: "img/carrossel-loja/espacador-smart-premium-story.png",
    titulo: "Espaçador Smart PREMIUM",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 45mm',
    largura: 'Largura: 30mm',
    comprimento: 'Comprimento: 38mm',
  },
  blocoEspuma: {
    imagem: "img/carrossel-loja/bloco-espuma-story.png",
    titulo: "Bloco de Espuma",
    descricao: "Os versáteis blocos de espuma SsLares são ideais para uma variedade de aplicações, desde o acabamento de reboco e a limpeza de revestimentos cerâmicos e vidros até a lavagem de automóveis e a limpeza em geral. Sua composição especial permite uma eficaz remoção de sujeira e manchas, tornando-os indispensáveis para diversas tarefas domésticas e comerciais. Experimente a praticidade e eficiência dos blocos de espuma para facilitar suas atividades diárias!",
    quantidade: 'Fardo com 20 unidades',
    altura: 'Altura: 5cmm',
    largura: 'Largura: 12cm',
    comprimento: 'Comprimento: 20cm',
  },
  raloOculto: {
    imagem: "img/carrossel-loja/ralo-oculto-story.png",
    titulo: "Ralo oculto",
    descricao: "O ralo oculto é a opção ideal para quem busca aliar funcionalidade e estética. Além de proporcionar mais segurança e favorecer a vazão da água, seu design discreto e moderno contribui para uma melhor estética do ambiente. Sua facilidade de instalação e as opções de tamanhos e cores disponíveis tornam o ralo oculto uma escolha versátil e prática. Com a capacidade de facilitar a limpeza doméstica, este produto se destaca como uma solução eficiente para banheiros, cozinhas e áreas de serviço.",
    quantidade: 'Caixas com 20 e 10 unidades',
    altura: 'Altura: 4.2cm',
    largura: 'Largura: 10 e 15cm',
    comprimento: 'Comprimento: 10 e 15cm',
  },
  raloOcultoCores: {
    imagem: "img/carrossel-loja/ralo-oculto-cores-story.png",
    titulo: "Ralo oculto",
    descricao: "O ralo oculto é a opção ideal para quem busca aliar funcionalidade e estética. Além de proporcionar mais segurança e favorecer a vazão da água, seu design discreto e moderno contribui para uma melhor estética do ambiente. Sua facilidade de instalação e as opções de tamanhos e cores disponíveis tornam o ralo oculto uma escolha versátil e prática. Com a capacidade de facilitar a limpeza doméstica, este produto se destaca como uma solução eficiente para banheiros, cozinhas e áreas de serviço.",
    quantidade: 'Caixas com 20 e 10 unidades',
    altura: 'Altura: 4.2cm',
    largura: 'Largura: 10 e 15cm',
    comprimento: 'Comprimento: 10 e 15cm',
  },
  plafon: {
    imagem: "img/carrossel-loja/paflon.png",
    titulo: "Plafon",
    descricao: "O Plafon com soquete de Porcelana E27 Branco é um dispositivo de iluminação de teto projetado para oferecer uma solução simples e funcional para a iluminação de ambientes internos. Ele é feito de PVC de alta qualidade, um material durável e resistente, na cor branca, que se adapta facilmente a diferentes estilos de decoração.Uma das características principais desse plafon é o seu soquete de porcelana E27, que é uma opção segura e confiável para a instalação de lâmpadas incandescentes, fluorescentes compactas ou LED com essa base. A porcelana é um material resistente ao calor e oferece maior segurança em comparação com soquetes de plástico ou metal, pois é menos propenso a derreter ou superaquecer.",
    quantidade: '',
    altura: '',
    largura: '',
    comprimento: '',
  },
}

function createDescriptionElement(id) {

  const produto = produtos[id]

  const templateHTML = (`
    <div id="cunhaSlim">
            <div class="descricao-produtos__container">
                <div class="descricao-produtos__imagens">
                    <div class="descricao-produtos__imagem-principal">
                        <img class="cunhaSlim" src="#" alt="">
                    </div>
                    <div class="descricao-produtos__imagens-selecionaveis">
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/slim-desenho-descricao.png" alt="">
                        </div>
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/cunha-slim-descricao.png" alt="">
                        </div>
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/slim-desenho-descricao.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="descricao-dos-produtos">
                    <div>
                        <h1>${produto.titulo}</h1>
                    </div>
                    <div>
                        <p>A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável.</p>
                        <h3>Embalagem</h3>
                        <p>${produto.quantidade}</p>
                        <h3>Dimensões</h3>
                        <p>${produto.altura}</p>
                        <p>${produto.largura}</p>
                        <p>${produto.comprimento}</p>
                    </div>
                    <div class="descricao-btn"><a href="#" class="btn">Comprar</a></div>
                </div>
            </div>
        </div>
  `)


  const produtosDescricaoContainer = document.querySelector('.descricao-produtos')
  produtosDescricaoContainer.innerHTML = templateHTML
}

document.querySelectorAll('.buy-btn').forEach(button => {

  button.addEventListener('click', function () {
    const id = button.dataset.produto

    createDescriptionElement(id)
  })
})

//Seletor de Produto


/*
function showElement(id) {
  let element = document.getElementById(id);
  element.classList.add('produtodescricaoShow');
  element.style.display = 'block';
}

function hideAllElements() {
  let element = document.querySelector('.produtodescricaoShow'); 
  if (!element) return; // Se o elemento não existir
    element.classList.remove('.produtodescricaoShow');
    element.style.display = 'none';
    console.log(element);
  };


document.querySelectorAll('.buy-btn').forEach(button => {
  
  button.addEventListener('click', function (){
    const id = button.dataset.produto;
    hideAllElements();
    showElement(id);
  })
})


function descriptionElement () {
  const tampleteHtml = `
  <div id="cunhaSlim">
            <div class="descricao-produtos__container">
                <div class="descricao-produtos__imagens">
                    <div class="descricao-produtos__imagem-principal">
                        <img class="cunhaSlim" src="#" alt="">
                    </div>
                    <div class="descricao-produtos__imagens-selecionaveis">
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/slim-desenho-descricao.png" alt="">
                        </div>
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/cunha-slim-descricao.png" alt="">
                        </div>
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/slim-desenho-descricao.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="descricao-dos-produtos">
                    <div>
                        <h1>Cunha Niveladora Slim</h1>
                    </div>
                    <div>
                        <p>A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável.</p>
                        <h3>Embalagem</h3>
                        <p>50 peças</p>
                        <h3>Dimensões</h3>
                        <p>Altura: 10 mm</p>
                        <p>Largura: 14 mm</p>
                        <p>Comprimento: 70 mm</p>
                    </div>
                    <div class="descricao-btn"><a href="#" class="btn">Comprar</a></div>
                </div>
            </div>
        </div>
  `
}
 



function showElement(id) {
  let element = document.getElementById(id);
  element.classList.add('produtoDescricaoShow')
  element.style.display = 'block';
}

function hideAllElements() {
  let element = document.querySelector('.produtoDescricaoShow') // substitua 'your-element-class' pela classe dos elementos que devem ser controlados

  if (!element) return 

  element.classList.remove('produtoDescricaoShow')
  element.style.display = 'none';
}


document.querySelectorAll('.buy-btn').forEach(button => {

  button.addEventListener('click', function () {
    const id = button.dataset.produto
    hideAllElements()
    showElement(id)
  })

})

*/




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






  






















