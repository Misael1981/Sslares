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

function filtrar() {
  let input,
    filter,
    ul,
    li,
    a,
    i,
    span,
    txtValue,
    count = 0;

  // Pegar os elementos HTML
  input = document.getElementById('searchInput');
  ul = document.getElementById('listaProdutos');

  // filtro
  filter = input.value.toUpperCase();
  // Pegar as <li> da lista 
  li = ul.getElementsByTagName('li');

  // Percorrer todos os <li>
  for (i = 0; i < li.length; i++) {
    // Pegar a tag <a> do elemento percorrido
    a = li[i].getElementsByTagName('a')[0];
    // Pegar o texto dentro do link
    txtValue = a.textContent || a.innerText;
    // Verificar se o texto que o usuário digitou bate com o texto da tag <a>
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      // Valor bateu
      li[i].style.display = '';
      count++;
      // Pegar a tag span com a classe .item-name
      span = li[i].querySelector('.item-name');
      // Se existir 
      if (span) {
        // Pegar o texto dentro da tag span
        let itemName = span.textContent || span.innerText;
        // Substituir apenas o texto correspondente pela tag <strong>
        span.innerHTML = itemName.replace(new RegExp(filter, 'gi'), (match) => {
          return "<strong>" + match + "</strong>";
        });
      }
    } else {
      // Não mostrar o item da lista 
      li[i].style.display = 'none';
    }
  }

  if (count === 0) {
    ul.style.display = 'none';
  } else {
    ul.style.display = 'block';
  }
}

// Direcionando Produtos à loja 
/* 
document.getElementById('descricaoProduto').addEventListener('click', function() {
  // Encontrar a seção de destino
  let storyBSection = document.querySelector('.story');

   // Alterar o estilo da seção para exibi-la
   storyBSection.style.display = 'block';

  // Rolar a página até a seção de destino
  storyBSection.scrollIntoView({ behavior: 'smooth' });
});
*/

const produtos = {
  produto1: {
      imagem: "img/carrossel-loja/cunha-niveladora.jpg",
      titulo: "Cunha",
      descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
      descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
      subtitulo: "Embalagem Cunha:",
      descricao3: '50 peças',
      subtitulo2: 'Dimensões',
      descricao4: 'Altura: 20mm',
      descricao5: 'Largura: 24mm',
      descricao6: 'Comprimento: 95mm',
      
      // Adicione outras propriedades conforme necessário
  },
  produto2: {
      imagem: "caminho/para/imagem2.jpg",
      titulo: "Título do Produto 2",
      subtitulo: "Subtítulo do Produto 2",
      descricao1: "Descrição detalhada do Produto 2 - Parte 1",
      descricao2: "Descrição detalhada do Produto 2 - Parte 2",
      // Adicione outras propriedades conforme necessário
  },
  // Adicione mais produtos conforme necessário
};


// Novo código



// Event listener para o clique no botão "Ver Mais"
document.getElementById('descricaoProduto1').addEventListener('click', function() {
  // Obter o ID do produto clicado
  const produtoId = this.dataset.produtoId;

  // Obter o objeto do produto correspondente
  const produto = produtos[produtoId];

  // Atualizar as propriedades da seção de descrição do produto
  document.querySelector('.story-iamgem').innerHTML = `<img src="${produto.imagem}" alt="Imagem do Produto">`;
  document.querySelector('.story-descricao h2').textContent = produto.titulo;
  document.querySelector('.story-descricao h3:nth-of-type(1)').textContent = produto.subtitulo;
  document.querySelector('.story-descricao p:nth-of-type(1)').textContent = produto.descricao1;
  document.querySelector('.story-descricao h3:nth-of-type(2)').textContent = produto.descricao2;

  console.log(document.querySelector('.story-descricao h2'));
console.log(document.querySelector('.story-descricao h3:nth-of-type(1)'));
console.log(document.querySelector('.story-descricao p:nth-of-type(1)'));
  document.querySelector('.story-descricao p:nth-of-type(2)').textContent = produto.descricao3;
  document.querySelector('.story-descricao h3:nth-of-type(3)').textContent = produto.subtitulo2;
  document.querySelector('.story-descricao p:nth-of-type(3)').textContent = produto.descricao4;
  document.querySelector('.story-descricao p:nth-of-type(4)').textContent = produto.descricao5;
  document.querySelector('.story-descricao p:nth-of-type(5)').textContent = produto.descricao6;


   
  document.addEventListener('DOMContentLoaded', function() {
    // Seu código aqui
    const storyElement = document.querySelector('.story');
    if (storyElement) {
      storyElement.style.display = 'block';
      console.log(storyElement.style.display);
    } else {
      alert('Elemento não encontrado');
    }
  
    // Exibir a seção de descrição do produto
    document.querySelector('.story').style.display = 'block';
    console.log(document.querySelector('.story').style.display);
  });

});































































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















