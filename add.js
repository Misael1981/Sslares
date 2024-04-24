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

//Seletor de produtos 

const produtos = {
  produto1: {
      imagem: "img/carrossel-loja/cunha-niveladora.jpg",
      titulo: "Cunha Niveladora",
      descricao1: "A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável",
      descricao2: "...",
      subtitulo: "Embalagem Cunha:",
      descricao3: '50 peças',
      subtitulo2: 'Dimensões',
      descricao4: 'Altura: 20mm',
      descricao5: 'Largura: 23mm',
      descricao6: 'Comprimento: 84mm',
  },
  produto2: {
    imagem: "img/carrossel-loja/cunhaslim-story.png",
    titulo: "Cunha Slim",
    descricao1: "A Cunha Niveladora com o auxílio do Espaçador Nivelador SSLARES garante o nivelamento correto dos pisos e mantém o espaçamento conforme a medida do espaçador. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. A cunha Niveladora SSLARES é reutilizável",
    descricao2: "...",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 23mm',
    descricao6: 'Comprimento: 84mm',
  },
  produto3: {
    imagem: "img/carrossel-loja/desempenadeira-espuma-story.png",
    titulo: "Desempenadeira Espuma",
    descricao1: "A Desempenadeira com Espuma é utilizada para o nivelamento de massas, argamassas e monocapas. Ideal para acabamento em massa fina e reboco.",
    descricao2: "...",
    subtitulo: "Embalagem:",
    descricao3: 'Caixa com 6 unidades',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 8cm',
    descricao5: 'Largura: 18cm',
    descricao6: 'Comprimento: 30cm',
  },
  produto4: {
    imagem: "img/carrossel-loja/desempenadeira-lisa-story.png",
    titulo: "Desempenadeira Lisa",
    descricao1: "Indicada para a preparação, nivelamento e acabamento de superfícies, podendo-se utilizar variados tipos de massas, aplicação e desempeno de massa fina.",
    descricao2: "...",
    subtitulo: "Embalagem:",
    descricao3: 'Caixa com 6 unidades',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 5cm',
    descricao5: 'Largura: 18cm',
    descricao6: 'Comprimento: 30cm',
  },
  produto5: {
    imagem: "img/carrossel-loja/desempenadeira-corrugada-story.png",
    titulo: "Desempenadeira Corrugada",
    descricao1: "Indicada para preparar superfícies diversas, como planos acantonados, gesso de alvenaria e placas de forro. Por ter uma base corrugada, seu principal diferencial é a facilidade de remover partículas estranhas da massa.",
    descricao2: "...",
    subtitulo: "Embalagem:",
    descricao3: 'Caixa com 6 unidades',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 5cm',
    descricao5: 'Largura: 18cm',
    descricao6: 'Comprimento: 30cm',
  },
  produto6: {
    imagem: "img/carrossel-loja/espacador-slim-padrao-story.png",
    titulo: "Espaçador Slim PADRÃO",
    descricao1: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    descricao2: "...",
    subtitulo: "Embalagem:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 45mm',
    descricao5: 'Largura: 30mm',
    descricao6: 'Comprimento: 38mm',
  },
  produto7: {
    imagem: "img/carrossel-loja/espacador-slim-story.png",
    titulo: "Espaçador Slim PREMIUM",
    descricao1: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    descricao2: "...",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 45mm',
    descricao5: 'Largura: 30mm',
    descricao6: 'Comprimento: 38mm',
  },
  produto8: {
    imagem: "img/carrossel-loja/espacador-smart-padrao-story.png",
    titulo: "Espaçador Smart PADRÃO",
    descricao1: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    descricao2: "...",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 45mm',
    descricao5: 'Largura: 30mm',
    descricao6: 'Comprimento: 38mm',
  },
  produto9: {
    imagem: "img/carrossel-loja/espacador-smart-premium-story.png",
    titulo: "Espaçador Smart PREMIUM",
    descricao1: "O Espaçador Nivelador SSLARES garante espaçamento e auxilia a Cunha Niveladora Slim a nivelar os pisos corretamente. Com as duas funções simultâneas agiliza o processo de assentamento dos pisos, reduzindo em até 50% o tempo de colocação. Medidas disponíveis 3 mm, 2 mm, 1,5 mm e 1 mm. Trabalhamos na versão PADRÃO (material reciclado cor cinza) e PREMIUM (material virgem cristal).",
    descricao2: "...",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 45mm',
    descricao5: 'Largura: 30mm',
    descricao6: 'Comprimento: 38mm',
  },
  produto10: {
    imagem: "img/carrossel-loja/bloco-espuma-story.png",
    titulo: "Bloco de Espuma",
    descricao1: "Os versáteis blocos de espuma SsLares são ideais para uma variedade de aplicações, desde o acabamento de reboco e a limpeza de revestimentos cerâmicos e vidros até a lavagem de automóveis e a limpeza em geral. Sua composição especial permite uma eficaz remoção de sujeira e manchas, tornando-os indispensáveis para diversas tarefas domésticas e comerciais. Experimente a praticidade e eficiência dos blocos de espuma para facilitar suas atividades diárias!",
    descricao2: "...",
    subtitulo: "Embalagem Cunha:",
    descricao3: 'Fardo com 20 unidades',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 5cmm',
    descricao5: 'Largura: 12cm',
    descricao6: 'Comprimento: 20cm',
  },
  produto11: {
    imagem: "img/carrossel-loja/ralo-oculto-story.png",
    titulo: "Ralo oculto",
    descricao1: "O ralo oculto é a opção ideal para quem busca aliar funcionalidade e estética. Além de proporcionar mais segurança e favorecer a vazão da água, seu design discreto e moderno contribui para uma melhor estética do ambiente. Sua facilidade de instalação e as opções de tamanhos e cores disponíveis tornam o ralo oculto uma escolha versátil e prática. Com a capacidade de facilitar a limpeza doméstica, este produto se destaca como uma solução eficiente para banheiros, cozinhas e áreas de serviço.",
    descricao2: "...",
    subtitulo: "Embalagem:",
    descricao3: 'Caixas com 20 e 10 unidades',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 4.2cm',
    descricao5: 'Largura: 10 e 15cm',
    descricao6: 'Comprimento: 10 e 15cm',
  },
  produto12: {
    imagem: "img/carrossel-loja/ralo-oculto-cores-story.png",
    titulo: "Ralo oculto",
    descricao1: "O ralo oculto é a opção ideal para quem busca aliar funcionalidade e estética. Além de proporcionar mais segurança e favorecer a vazão da água, seu design discreto e moderno contribui para uma melhor estética do ambiente. Sua facilidade de instalação e as opções de tamanhos e cores disponíveis tornam o ralo oculto uma escolha versátil e prática. Com a capacidade de facilitar a limpeza doméstica, este produto se destaca como uma solução eficiente para banheiros, cozinhas e áreas de serviço.",
    descricao2: "...",
    subtitulo: "Embalagem:",
    descricao3: 'Caixas com 20 e 10 unidades',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 4.2cm',
    descricao5: 'Largura: 10 e 15cm',
    descricao6: 'Comprimento: 10 e 15cm',
  },
  produto13: {
    imagem: "img/carrossel-loja/paflon.png",
    titulo: "Plafon",
    descricao1: "O Plafon com soquete de Porcelana E27 Branco é um dispositivo de iluminação de teto projetado para oferecer uma solução simples e funcional para a iluminação de ambientes internos. Ele é feito de PVC de alta qualidade, um material durável e resistente, na cor branca, que se adapta facilmente a diferentes estilos de decoração.Uma das características principais desse plafon é o seu soquete de porcelana E27, que é uma opção segura e confiável para a instalação de lâmpadas incandescentes, fluorescentes compactas ou LED com essa base. A porcelana é um material resistente ao calor e oferece maior segurança em comparação com soquetes de plástico ou metal, pois é menos propenso a derreter ou superaquecer.",
    descricao2: "...",
    subtitulo: "",
    descricao3: '',
    subtitulo2: '',
    descricao4: '',
    descricao5: '',
    descricao6: '',
  },
  produto14: {
    imagem: "img/carrossel-loja/cunha.jpg",
    titulo: "Cunha",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
},
  produto15: {
    imagem: "img/carrossel-loja/cunhaslim-story.png",
    titulo: "Cunha Slim",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto16: {
    imagem: "img/carrossel-loja/desempenadeira-espuma-story.png",
    titulo: "Desempenadeira Espuma",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto17: {
    imagem: "img/carrossel-loja/desempenadeira-lisa-story.png",
    titulo: "Desempenadeira Lisa",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto18: {
    imagem: "img/carrossel-loja/desempenadeira-corrugada-story.png",
    titulo: "Desempenadeira Corrugada",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto19: {
    imagem: "img/carrossel-loja/espacador-slim-padrao-story.png",
    titulo: "Espaçador Slim PADRÃO",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto20: {
    imagem: "img/carrossel-loja/espacador-slim-story.png",
    titulo: "Espaçador Slim PREMIUM",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto21: {
    imagem: "img/carrossel-loja/espacador-smart-padrao-story.png",
    titulo: "Espaçador Smart PADRÃO",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto22: {
    imagem: "img/carrossel-loja/espacador-smart-premium-story.png",
    titulo: "Espaçador Smart PREMIUM",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto23: {
    imagem: "img/carrossel-loja/bloco-espuma-story.png",
    titulo: "Bloco de Espuma",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto24: {
    imagem: "img/carrossel-loja/ralo-oculto-story.png",
    titulo: "Ralo oculto",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto25: {
    imagem: "img/carrossel-loja/ralo-oculto-cores-story.png",
    titulo: "Ralo oculto",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
  produto26: {
    imagem: "img/carrossel-loja/paflon.png",
    titulo: "Paflon",
    descricao1: "A Cunha e o Espaçador para nivelamento de pisos e Revestimentos da Cortag foi desenvolvido para facilitar o nivelamento do revestimentos cerâmicos ajudando a eliminar a irregularidade no assentamento mantendo os pisos no mesmo nível.",
    descricao2: "Tem a função de travar os clips no revestimento e nivelar.Ideal para usar em revestimentos cerâmicos, especialmente porcelanato.Reduz o tempo de colocação do revestimento.",
    subtitulo: "Embalagem Cunha:",
    descricao3: '50 peças',
    subtitulo2: 'Dimensões',
    descricao4: 'Altura: 20mm',
    descricao5: 'Largura: 24mm',
    descricao6: 'Comprimento: 95mm',
  },
};

// Selecionar todos os botões "Ver Mais"
const botoesVerMais = document.querySelectorAll('.buy-btn');

// Adicionar um evento de clique para cada botão "Ver Mais"
botoesVerMais.forEach(botao => {
    botao.addEventListener('click', function() {
        // Obter o ID do produto associado a este botão
        const produtoId = this.dataset.produtoId;

        // Obter o objeto do produto correspondente
        const produto = produtos[produtoId];

        // Atualizar as propriedades da seção de descrição do produto
        document.querySelector('.story-iamgem').innerHTML = `<img src="${produto.imagem}" alt="Imagem do Produto">`;
        document.querySelector('.story-descricao h1').textContent = produto.titulo;
        document.querySelector('.story-descricao p:nth-of-type(1)').textContent = produto.descricao1;
        document.querySelector('.story-descricao p:nth-of-type(2)').textContent = produto.descricao2;
        document.querySelector('.story-descricao h2:nth-of-type(1)').textContent = produto.subtitulo;
        document.querySelector('.story-descricao p:nth-of-type(2)').textContent = produto.descricao3;
        document.querySelector('.story-descricao h2:nth-of-type(2)').textContent = produto.subtitulo2;
        document.querySelector('.story-descricao p:nth-of-type(3)').textContent = produto.descricao4;
        document.querySelector('.story-descricao p:nth-of-type(4)').textContent = produto.descricao5;
        document.querySelector('.story-descricao p:nth-of-type(5)').textContent = produto.descricao6;

        // Exibir a seção de descrição do produto
        document.querySelector('.story').style.display = 'block';
    });
});

// seletor 

const botoesVerMaisSeletor = document.querySelectorAll('.card-btn');

// Adicionar um evento de clique para cada botão "Ver Mais"
botoesVerMaisSeletor.forEach(botao => {
    botao.addEventListener('click', function() {
        // Obter o ID do produto associado a este botão
        const produtoId = this.dataset.produtoId;

        // Obter o objeto do produto correspondente
        const produto = produtos[produtoId];

        // Atualizar as propriedades da seção de descrição do produto
        document.querySelector('.story-iamgem').innerHTML = `<img src="${produto.imagem}" alt="Imagem do Produto">`;
        document.querySelector('.story-descricao h1').textContent = produto.titulo;
        document.querySelector('.story-descricao p:nth-of-type(1)').textContent = produto.descricao1;
        document.querySelector('.story-descricao p:nth-of-type(2)').textContent = produto.descricao2;
        document.querySelector('.story-descricao h2:nth-of-type(1)').textContent = produto.subtitulo;
        document.querySelector('.story-descricao p:nth-of-type(2)').textContent = produto.descricao3;
        document.querySelector('.story-descricao h2:nth-of-type(2)').textContent = produto.subtitulo2;
        document.querySelector('.story-descricao p:nth-of-type(3)').textContent = produto.descricao4;
        document.querySelector('.story-descricao p:nth-of-type(4)').textContent = produto.descricao5;
        document.querySelector('.story-descricao p:nth-of-type(5)').textContent = produto.descricao6;

        // Exibir a seção de descrição do produto
        document.querySelector('.story').style.display = 'block';
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



  






















