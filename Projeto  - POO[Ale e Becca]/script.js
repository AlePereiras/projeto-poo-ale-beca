let produto1 = {
    nome: 'Samsung Galaxy S20',
    preco: 'R$ 1.500,00',
    poster: 'images1.jpg'
}

let produto2 = {
    nome: 'Notebook Samsung Book Intel',
    preco: 'R$ 3.000,00',
    poster: 'images2.jpg'
}

let produto3 = {
    nome: 'Smart TV LED 50',
    preco: 'R$ 2.500,00',
    poster: 'images3.jpg'
}

let produto4 = {
    nome: 'Fone de Ouvido Sem Fio',
    preco: 'R$ 200,00',
    poster: 'images4.jpg'
}

let produto5 = {
    nome: 'Câmera DSLR',
    preco: 'R$ 4.000,00',
    poster: 'images5.jpg'
}

let produto6 = {
    nome: 'Tablet Samsung Galaxy Tab A7',
    preco: 'R$ 1.200,00',
    poster: 'images6.jpg'
}

let produto7 = {
    nome: 'Smartwatch',
    preco: 'R$ 800,00',
    poster: 'images7.jpg'
}

let produto8 = {
    nome: 'Console de videogame',
    preco: 'R$ 2.000,00',
    poster: 'images8.jpeg'
}

let produto9 = {
    nome: 'Caixa de Som Bluetooth',
    preco: 'R$ 300,00',
    poster: 'images9.jpg'
}

let produto10 = {
    nome: 'Monitor de Computador',
    preco: 'R$ 700,00',
    poster: 'images10.jpg'
}

let produto11 = {
    nome: 'Impressora Multifuncional',
    preco: 'R$ 500,00',
    poster: 'images11.jpg'
}

let produto12 = {
    nome: 'Drone',
    preco: 'R$ 1.500,00',
    poster: 'images12.jpg'
}

let produto13 = {
    nome: 'Headset Gamer',
    preco: 'R$ 400,00',
    poster: 'images13.jpg'
}

let produto14 = {
    nome: 'Roteador Wi-Fi',
    preco: 'R$ 150,00',
    poster: 'images14.jpg'
}

let produto15 = {
    nome: 'Projetor',
    preco: 'R$ 2.500,00',
    poster: 'images15.jpg'
}

let produto16 = {
    nome: 'Câmera de Segurança',
    preco: 'R$ 300,00',
    poster: 'images16.jpg'
}

let produto17 = {
    nome: 'Teclado Mecânico ',
    preco: 'R$ 250,00',
    poster: 'images17.jpg'
}

let produto18 = {
    nome: 'Carregador Portátil',
    preco: 'R$ 100,00',
    poster: 'images18.jpg'
}

let produto19 = {
    nome: 'Placa de Vídeo',
    preco: 'R$ 2.000,00',
    poster: 'images19.jpg'
}

let produto20 = {
    nome: 'Mouse Gamer',
    preco: 'R$ 48,90',
    poster: 'images20.jpg'
}

let equipamentos = [
    produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10,
    produto11, produto12, produto13, produto14, produto15, produto16, produto17, produto18, produto19, produto20
];

const equipamentosContainer = document.getElementById('equipamentos-container');
const favoritosBtn = document.getElementById('favoritos-btn');
let favoritos = [];

equipamentos.forEach(produto => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const img = document.createElement('img');
    img.src = `img/${produto.poster}`;

    const nome = document.createElement('h1');
    nome.className = 'nome';
    nome.textContent = produto.nome;

    const preco = document.createElement('h2');
    preco.className = 'preco';
    preco.textContent = produto.preco;

    const favoritoBtn = document.createElement('button');
    favoritoBtn.textContent = 'Adicionar aos Favoritos';
    favoritoBtn.classList.add('btn-favorito');
    favoritoBtn.addEventListener('click', () => {
        adicionarAosFavoritos(produto);
    });

    cardDiv.appendChild(img);
    cardDiv.appendChild(nome);
    cardDiv.appendChild(preco);
    cardDiv.appendChild(favoritoBtn);

    equipamentosContainer.appendChild(cardDiv);
});

const adicionarAosFavoritos = (produto) => {
    favoritos.push(produto);
    alert(`O produto ${produto.nome} foi adicionado aos favoritos!`);
}

favoritosBtn.addEventListener('click', () => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    window.location.href = 'favoritos.html';
});