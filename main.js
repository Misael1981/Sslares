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


// Modal

const openModalButtonHome = document.querySelector("#open-modal-home"); // Abrir Modal na página principal
const closeModalButton = document.querySelector("#close-modal"); // Fechar Modal 

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButtonHome.addEventListener("click", () => toggleModal()); // Adiciona evento de clique para abrir o modal na página principal

closeModalButton.addEventListener("click", () => {
    toggleModal();
  });

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

email.addEventListener("blur", () => {
  checkInputEmail();
})


nome.addEventListener("blur", () => {
  checkInputNome();
})


function checkInputNome() {
  const nomeValue = nome.value;

  if (nomeValue === "") {
    errorInput(nome, "Preenchimento obrigatório!");
  }else {
    const formItem = nome.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório.");
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputTelefone() {
  const telefoneValue = telefone.value;

  if (telefoneValue === "") {
    errorInput(telefone, 'Preenchimento obrigatório!');
  } else {
    clearError(telefone);
  }
}

function checkInputCidade() {
  const cidadeValue = cidade.value;

  if (cidadeValue === "") {
    errorInput(cidade, 'Preenchimento obrigatório!');
  } else {
    clearError(cidade);
  }
}

function checkInputAssunto() {
  const assuntoValue = assunto.value;

  if (assuntoValue === "") {
    errorInput(assunto, 'Preenchimento obrigatório!');
  } else {
    clearError(assunto);
  }
}

// Modifique a função checkForm para enviar o e-mail após a validação
function checkForm(){
  checkInputNome();
  checkInputEmail();
  checkInputTelefone();
  checkInputCidade();
  checkInputAssunto();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every(item => item.className === "form-content");

  if (isValid){
    const formData = {
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
      cidade: cidade.value,
      assunto: assunto.value
    };

    sendEmail(formData);
    alert("CADASTRADO COM SUCESSO!");
  }
}


function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;

  formItem.classList.add("error");
}

function clearError(input) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  if (textMessage) {
    textMessage.innerText = "";
  }

  formItem.classList.remove("error");
}

emailjs.init('RWsCot8BerUSejBIY');

function sendEmail(formData) {
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    .then(function(response) {
      console.log('E-mail enviado com sucesso!', response);
    }, function(error) {
      console.error('Erro ao enviar e-mail:', error);
    });
}



/*
function checkForm(){
  checkInputNome();
  checkInputEmail();
  checkInputTelefone();
  checkInputCidade();
  checkInputAssunto();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every(item => item.className === "form-content");

  if (isValid){
    alert("CADASTRADO COM SUCESSO!")
    console.log(isValid)
  }
}
*/






  