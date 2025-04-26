body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0; /* Fundo cinza claro */
    color: #333;
    position: relative;
}

/* Círculos decorativos nas bordas */
body::before,
body::after {
    content: '';
    position: fixed;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(circle, #ff6f61, #ffb88c);
    z-index: -1;
}

body::before {
    top: 20px;
    left: 20px;
}

body::after {
    bottom: 20px;
    right: 20px;
}

.atalho {
    position: absolute;
    top: -9999px;
}

.atalho:focus {
    top: 10px;
    left: 10px;
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-decoration: none;
    z-index: 1000;
}

.cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: url('../img/bg-header.png') no-repeat center;
    background-size: cover;
}

.logo {
    width: 100px;
}

.menu {
    display: flex;
    gap: 20px;
    list-style: none;
}

.menu a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
}

.menu a:hover {
    text-decoration: underline;
}

.secao {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
}

.secao h1,
.secao h2 {
    color: #222; /* Ajustado para maior contraste com fundo cinza */
    margin-bottom: 20px;
}

.secao p {
    line-height: 1.6;
}

.secao ul {
    list-style: none;
}

.secao ul li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.secao ul li img {
    width: 50px;
    border-radius: 50%;
}

.rodape {
    text-align: center;
    padding: 20px;
    background: url('../img/bg-footer.png') no-repeat center;
    background-size: cover;
    color: #333;
}

.alto-contraste {
    background-color: #333; /* Fundo mais escuro no modo alto contraste */
    color: #fff;
}

.alto-contraste .cabecalho,
.alto-contraste .rodape {
    background: none;
}

.alto-contraste a,
.alto-contraste p,
.alto-contraste h1,
.alto-contraste h2 {
    color: #fff;
}
