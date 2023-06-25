const favoritosContainer = document.getElementById('favoritos-container');
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

favoritos.forEach(produto => {
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

    cardDiv.appendChild(img);
    cardDiv.appendChild(nome);
    cardDiv.appendChild(preco);

    favoritosContainer.appendChild(cardDiv);
});
