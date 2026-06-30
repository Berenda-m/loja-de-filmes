
const formFilme = document.getElementById('formFilme');
const titulo = document.getElementById('titulo');
const genero = document.getElementById('genero');
const ano = document.getElementById('ano');
const listaFilmes = document.getElementById('listaFilmes');
formFilme.addEventListener('submit', function(event) {
    event.preventDefault();
    const filme = {
        titulo: titulo.value,
        genero: genero.value,
        ano: parseInt(ano.value)
    };
    listaFilmes.innerHTML += `
        <div>
            <h3>🎥 ${filme.titulo}</h3>
            <p> 🎭 Gênero: ${filme.genero}</p>
            <p> 📆 Ano: ${filme.ano}</p>
            <button onclick="this.parentElement.remove()">Remover</button>
        </div>
    `;
    titulo.value = '';
    genero.value = '';
    ano.value = '';
});