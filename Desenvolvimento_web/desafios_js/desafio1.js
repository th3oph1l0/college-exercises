const btnBuscar = document.getElementById('btn-buscar');
const divResultado = document.getElementById('resultado');

btnBuscar.addEventListener('click', async () => {
    
    divResultado.classList.remove('oculto');
    divResultado.innerHTML = '<p style="padding: 20px;">Buscando no Ninho do Urubu...</p>';

    try {
        const resposta = await fetch('api-flamengo.json');
        
        const jogadores = await resposta.json();

        const indiceAleatorio = Math.floor(Math.random() * jogadores.length);
        const craque = jogadores[indiceAleatorio];

        divResultado.innerHTML = `
            <img src="${craque.imagem}" alt="Foto do ${craque.nome}">
            <div class="info">
                <h2>${craque.nome}</h2>
                <p>Posição: <span>${craque.posicao}</span></p>
                <p>Camisa: <span>${craque.camisa}</span></p>
            </div>
        `;

    } catch (erro) {
        divResultado.innerHTML = '<p style="padding: 20px; color: #ff6b6b;">Erro ao buscar dados. O juiz apitou falta!</p>';
        console.error("Erro na API:", erro);
    }
});