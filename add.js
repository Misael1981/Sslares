// Menu
let show = true;
const menuContent = document.querySelector('.menu');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

// Perquiza de produtos


function filtrar() {
  // Obter o valor digitado no campo de busca
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".produtos-pesquisar");
  li = ul.getElementsByTagName("li");
  // Seção de resultados
  const resultadoPesquisa = document.querySelector(".resultado__pesquisa"); 

  // Itera sobre todos os itens da lista
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    // Exibe o item da lista se o texto corresponder à busca
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ""; 
      resultadoPesquisa.style.display = "block"; // Exibe a seção
    } else {
      li[i].style.display = "none";
    }
  }

  // Para ocultar a section
  if (input.value === "") {
    resultadoPesquisa.style.display = "none"; 
  }
}

// Descrição dos Produtos


const produtos = {
  cunhaNiveladora: {
    imagem1: "cunha-smart-desenho-descricao.png",
    imagem2: "cunha-niveladora.png",
    imagem3: "smart-desenho-descricao.png",
    titulo: "Cunha Niveladora",
    descricao: "A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável",
    quantidade: '50 peças',
    altura: 'Altura: 20 mm',
    largura: 'Largura: 23 mm ',
    comprimento: 'Comprimento: 84 mm',
  },
  
  cunhaSlim: {
    imagem1: "cunha-slim-desenho-descricao.png",
    imagem2: "cunha-slim-descricao.png",
    imagem3: "slim-desenho-descricao.png",
    titulo: "Cunha Slim",
    descricao: "A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável",
    quantidade: '50 peças',
    altura: 'Altura: 10 mm',
    largura: 'Largura: 14 mm',
    comprimento: 'Comprimento: 70 mm',
  },
  
  desempenadeiraEspuma: {
    imagem1: "espuma-a-descricao.png",
    imagem2: "desempenadeira-espuma-descricao.png",
    imagem3: "espuma-a-descricao.png",
    titulo: "Desempenadeira Espuma",
    descricao: "A Desempenadeira com Espuma é utilizada para o nivelamento de massas, argamassas e monocapas. Ideal para acabamento em massa fina e reboco.",
    quantidade: 'Caixa com 6 unidades',
    altura: 'Altura: 8cm',
    largura: 'Largura: 18cm',
    comprimento: 'Comprimento: 30cm',
  },

  desempenadeiraLisa: {
    imagem1: "lisa-a-descricao.png",
    imagem2: "lisa-a-descricao.png",
    imagem3: "desempenadeira-a-descricao.png",
    titulo: "Desempenadeira Lisa",
    descricao: "Indicada para a preparação, nivelamento e acabamento de superfícies, podendo-se utilizar variados tipos de massas, aplicação e desempeno de massa fina.",
    quantidade: 'Caixa com 6 unidades',
    altura: 'Altura: 5cm',
    largura: 'Largura: 18cm',
    comprimento: 'Comprimento: 30cm',
  },

  desempenadeiraCorrugada: {
    imagem1: "corrugada-a-descricao.png",
    imagem2: "desempenadeira-corrugada-descricao.png",
    imagem3: "corrugada-par-a-descricao.png",
    titulo: "Desempenadeira Corrugada",
    descricao: "Indicada para preparar superfícies diversas, como planos acantonados, gesso de alvenaria e placas de forro. Por ter uma base corrugada, seu principal diferencial é a facilidade de remover partículas estranhas da massa.",
    quantidade: 'Caixa com 6 unidades',
    altura: 'Altura: 5cm',
    largura: 'Largura: 18cm',
    comprimento: 'Comprimento: 30cm',
  },

  espacadorSlimPadrao: {
    imagem1: "espacador-slim-desenho-descricao.png",
    imagem2: "espacador-slim-pd-descricao.png",
    imagem3: "slim-desenho-descricao.png",
    titulo: "Espaçador Slim PADRÃO",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 30mm',
    largura: 'Largura: 25mm',
    comprimento: 'Comprimento: 25mm',
  },
 
  espacadorSlimPremium: {
    imagem1: "espacador-slim-desenho-descricao.png",
    imagem2: "espacador-slim-pm-descricao.png",
    imagem3: "slim-desenho-descricao.png",
    titulo: "Espaçador Slim PREMIUM",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 30mm',
    largura: 'Largura: 25mm',
    comprimento: 'Comprimento: 25mm',
  },
 
  espacadorSmartPadrao: {
    imagem1: "espacador-smart-desenho-descricao.png",
    imagem2: "espacador-smart-padrao1.png",
    imagem3: "smart-desenho-descricao.png",
    titulo: "Espaçador Smart PADRÃO",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 45mm',
    largura: 'Largura: 30mm',
    comprimento: 'Comprimento: 38mm',
  },
  
  espacadorSmartPremium: {
    imagem1: "espacador-smart-desenho-descricao.png",
    imagem2: "espacador-smart-pm-descricao.png",
    imagem3: "smart-desenho-descricao.png",
    titulo: "Espaçador Smart PREMIUM",
    descricao: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    quantidade: '50 peças',
    altura: 'Altura: 45mm',
    largura: 'Largura: 30mm',
    comprimento: 'Comprimento: 38mm',
  },
  
  blocoEspuma: {
    imagem1: "blocoespuma-desenho-descricao.png",
    imagem2: "bloco-espuma-descricao.png",
    imagem3: "blocoespuma-desenho-descricao.png",
    titulo: "Bloco de Espuma",
    descricao: "Os versáteis blocos de espuma SsLares são ideais para uma variedade de aplicações, desde o acabamento de reboco e a limpeza de revestimentos cerâmicos e vidros até a lavagem de automóveis e a limpeza em geral. Sua composição especial permite uma eficaz remoção de sujeira e manchas, tornando-os indispensáveis para diversas tarefas domésticas e comerciais. Experimente a praticidade e eficiência dos blocos de espuma para facilitar suas atividades diárias!",
    quantidade: 'Fardo com 20 unidades',
    altura: 'Altura: 5cmm',
    largura: 'Largura: 12cm',
    comprimento: 'Comprimento: 20cm',
  },
  
  raloOculto: {
    imagem1: "ralo-oculto-15x15-descricao.png",
    imagem2: "ralo-oculto-10x10-descricao.png",
    imagem3: "ralo-oculto-descricao.png",
    titulo: "Ralo oculto",
    descricao: "O ralo oculto é a opção ideal para quem busca aliar funcionalidade e estética. Além de proporcionar mais segurança e favorecer a vazão da água, seu design discreto e moderno contribui para uma melhor estética do ambiente. Sua facilidade de instalação e as opções de tamanhos e cores disponíveis tornam o ralo oculto uma escolha versátil e prática. Com a capacidade de facilitar a limpeza doméstica, este produto se destaca como uma solução eficiente para banheiros, cozinhas e áreas de serviço.",
    quantidade: 'Caixas com 20 e 10 unidades',
    altura: 'Altura: 4.2cm',
    largura: 'Largura: 10 e 15cm',
    comprimento: 'Comprimento: 10 e 15cm',
  },
  
  raloOcultoCores: {
    imagem1: "ralo-oculto-15x15-descricao.png",
    imagem2: "ralo-oculto-10x10-descricao.png",
    imagem3: "ralo-oculto-cores-descricao.png",
    titulo: "Ralo oculto",
    descricao: "O ralo oculto é a opção ideal para quem busca aliar funcionalidade e estética. Além de proporcionar mais segurança e favorecer a vazão da água, seu design discreto e moderno contribui para uma melhor estética do ambiente. Sua facilidade de instalação e as opções de tamanhos e cores disponíveis tornam o ralo oculto uma escolha versátil e prática. Com a capacidade de facilitar a limpeza doméstica, este produto se destaca como uma solução eficiente para banheiros, cozinhas e áreas de serviço.",
    quantidade: 'Caixas com 20 e 10 unidades',
    altura: 'Altura: 4.2cm',
    largura: 'Largura: 10 e 15cm',
    comprimento: 'Comprimento: 10 e 15cm',
  },
  
  plafon: {
    imagem1: "plafon-descricao.png",
    imagem2: "plafon-descricao.png",
    imagem3: "plafon-descricao.png",
    titulo: "Plafon",
    descricao: "O Plafon com soquete de Porcelana E27 Branco é um dispositivo de iluminação de teto projetado para oferecer uma solução simples e funcional para a iluminação de ambientes internos. Ele é feito de PVC de alta qualidade, um material durável e resistente, na cor branca, que se adapta facilmente a diferentes estilos de decoração.Uma das características principais desse plafon é o seu soquete de porcelana E27, que é uma opção segura e confiável para a instalação de lâmpadas incandescentes, fluorescentes compactas ou LED com essa base. A porcelana é um material resistente ao calor e oferece maior segurança em comparação com soquetes de plástico ou metal, pois é menos propenso a derreter ou superaquecer.",
    quantidade: '',
    altura: '',
    largura: '',
    comprimento: '',
  },
  
}

function createDescriptionElement(id) {

  const produto = produtos[id];
  // Cria o Template HTML

  const templateHTML = (`
    <div id="cunhaSlim">
            <div class="descricao-produtos__container">
                <div class="descricao-produtos__imagens">
                    <div class="descricao-produtos__imagem-principal">
                        <img class="imagem-principal" src="img/descricao-produtos/${produto.imagem2}" alt="">
                    </div>
                    <div class="descricao-produtos__imagens-selecionaveis">
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/${produto.imagem1}" alt=""
                            onclick = "changeImage('${produto.imagem1}')">
                        </div>
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/${produto.imagem2}" alt="" onclick = "changeImage('${produto.imagem2}')">
                        </div>
                        <div class="descricao-produtos__imagem-selecionavel">
                            <img class="imagem-selecionada" src="img/descricao-produtos/${produto.imagem3}" alt="" onclick = "changeImage('${produto.imagem3}')">
                        </div>
                    </div>
                </div>
                <div class="descricao-dos-produtos">
                    <div>
                        <h1>${produto.titulo}</h1>
                    </div>
                    <div>
                        <p>${produto.descricao}</p>
                        <h3>Embalagem</h3>
                        <p>${produto.quantidade}</p>
                        <h3>Dimensões</h3>
                        <p>${produto.altura}</p>
                        <p>${produto.largura}</p>
                        <p>${produto.comprimento}</p>
                    </div>
                    <div class="descricao-btn"><a href="https://wa.me/5535991972424" target="_blank" class="btn">Comprar</a></div>
                </div>
            </div>
        </div>
  `)


  const produtosDescricaoContainer = document.querySelector('.descricao-produtos');
  // O comando que imprime o template
  produtosDescricaoContainer.innerHTML = templateHTML
}
 // A função pra chamar o Template no click do botão no carrossel
document.querySelectorAll('.buy-btn').forEach(button => {

  button.addEventListener('click', function () {
    const id = button.dataset.produto

    createDescriptionElement(id)
  })
})

document.querySelectorAll('.btn-pesquisa').forEach(button => {

  button.addEventListener('click', function () {
    const id = button.dataset.produto

    createDescriptionElement(id)
  })
})

// Seletor de Imagens

function changeImage (imgName) {
  const img = document.querySelector('.imagem-principal');
  img.src = `img/descricao-produtos/${imgName}`
}



// carrossel

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
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



// Função para calcular o número de espaçadores em Y
function calcularEspacadoresy() {
  
  var largura = parseFloat(document.getElementById("txtlargy").value);
  if (largura && largura > 0) {
      var espacadores = 0;
      if (largura <= 40) {
          espacadores = 1;
      } else {
          espacadores = Math.ceil(largura / 27); 
      }

      // Atualizando o texto da label com o número de espaçadores
      document.querySelector(".caluladora__item[for='txtcalcy']").innerText = "Número de espaçadores necessários: " + espacadores;
  } else {
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
  if (comprimento && comprimento > 0 && largura && largura > 0 && metrosQuadrados && metrosQuadrados > 0) {
    var totalEspacadores = Math.round((1 / ((largura / 100) * (comprimento / 100)) * 4) * metrosQuadrados);
    document.querySelector(".caluladora__item[for='txtvtotal']").innerText = "Quantidade total de espaçadores: " + totalEspacadores;
  } else {
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
  var comprimento = parseFloat(document.getElementById("txtcomprx").value);
  var select = document.querySelector(".seletor__calculadora");
  if (comprimento && comprimento > 0) {
      var espacadores = 0;
      if (select.value === "opcao2") {
          comprimento = converterParaPolegadas(comprimento);
      }

      if (comprimento <= 16) {
          espacadores = 1;
      } else {
          espacadores = Math.ceil(comprimento / 11); 
      }
      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Número de espaçadores necessários: " + espacadores;
  } else {
      document.querySelector(".caluladora__item[for='txtcalcx']").innerText = "Por favor, insira um comprimento válido.";
  }
}

document.getElementById("txtcomprx").addEventListener("change", calcularEspacadoresx);

function calcularEspacadoresy() {
  var largura = parseFloat(document.getElementById("txtlargy").value);
  var select = document.querySelector(".seletor__calculadora");

  if (largura && largura > 0) {
      var espacadores = 0;

      // Convertendo para polegadas, se a unidade selecionada for "Polegadas (in)"
      if (select.value === "opcao2") {
          largura = converterParaPolegadas(largura);
      }
      if (largura <= 16) {
          espacadores = 1;
      } else {
          espacadores = Math.ceil(largura / 11); 
      }
      document.querySelector(".caluladora__item[for='txtcalcy']").innerText = "Número de espaçadores necessários: " + espacadores;
  } else {
      document.querySelector(".caluladora__item[for='txtcalcy']").innerText = "Por favor, insira uma largura válida.";
  }
}

// Associando a função de cálculo ao evento de alteração do campo de entrada txtlargy
document.getElementById("txtlargy").addEventListener("change", calcularEspacadoresy);

// Função para calcular a quantidade total de espaçadores
function calcularTotalEspacadores() {
  var comprimento = parseFloat(document.getElementById("txtcomprx").value);
  var largura = parseFloat(document.getElementById("txtlargy").value);
  var metrosQuadrados = parseFloat(document.getElementById("txtmq").value);
  var select = document.querySelector(".seletor__calculadora");
  if (comprimento && comprimento > 0 && largura && largura > 0) {
      if (select.value === "opcao2") {
          comprimento = converterParaPolegadas(comprimento);
          largura = converterParaPolegadas(largura);
      }

      var totalEspacadores = Math.round((1 / ((largura / 100) * (comprimento / 100)) * 4) * metrosQuadrados);

      document.querySelector(".caluladora__item[for='txtvtotal']").innerText = "Quantidade total de espaçadores: " + totalEspacadores;
  } else {
      
      document.querySelector(".caluladora__item[for='txtvtotal']").innerText = "Por favor, insira comprimento"
  }

}

// Formulário Seja Parceiro

const form = document.getElementById('form');
const nome = document.getElementById('username');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const cidade = document.getElementById('cidade');
const assunto = document.getElementById('assunto');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
});

// Validações com blur (ao sair do campo)
email.addEventListener("blur", checkInputEmail); 
nome.addEventListener("blur", checkInputNome);

// Funções de validação
function checkInputNome() {
    const nomeValue = nome.value.trim(); // Remove espaços em branco
    if (nomeValue === "") {
        errorInput(nome, "Preenchimento obrigatório!");
    } else {
        clearError(nome); 
    }
}

function checkInputEmail() {
    const emailValue = email.value.trim();
    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.");
    } else {
        clearError(email); 
    }
}

function checkInputTelefone() {
    const telefoneValue = telefone.value.trim();
    if (telefoneValue === "") {
        errorInput(telefone, 'Preenchimento obrigatório!');
    } else {
        clearError(telefone);
    }
}

function checkInputCidade() {
    const cidadeValue = cidade.value.trim();
    if (cidadeValue === "") {
        errorInput(cidade, 'Preenchimento obrigatório!');
    } else {
        clearError(cidade);
    }
}

function checkInputAssunto() {
    const assuntoValue = assunto.value.trim();
    if (assuntoValue === "") {
        errorInput(assunto, 'Preenchimento obrigatório!');
    } else {
        clearError(assunto);
    }
}

// Função principal de validação e envio
function checkForm() {
    // Chama todas as funções de validação
    checkInputNome();
    checkInputEmail();
    checkInputTelefone();
    checkInputCidade();
    checkInputAssunto();

    // Verifica se todos os campos são válidos
    const formItems = form.querySelectorAll(".form-content");
    const isValid = [...formItems].every(item => item.className === "form-content");

    // Se o formulário for válido, envia o email
    if (isValid) {
        const formData = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            cidade: cidade.value,
            assunto: assunto.value
        };
        sendEmail(formData);
        alert("CADASTRADO COM SUCESSO!");
        console.log(sendEmail(formData))
    }
}

// Funções auxiliares para exibir/limpar erros
function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span"); 
    textMessage.innerText = message;
    formItem.classList.add("error");
}

function clearError(input) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("span"); 
    if (textMessage) {
        textMessage.innerText = "";
    }
    formItem.classList.remove("error");
}

// Inicializa o EmailJS (substitua com suas credenciais)
emailjs.init('RWsCot8BerUSejBIY'); 
function sendEmail(formData) {
    emailjs.send('service_ynv16u3', 'template_num12re', formData)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
        }, function(error) {
            console.error('Erro ao enviar e-mail:', error);
        });
}






  






















