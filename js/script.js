
let formFilme = document.getElementById('formFilme');
let botaoDark = document.getElementById('dark')
let titulo = document.getElementById('titulo');
let genero = document.getElementById('genero');
let ano = document.getElementById('ano');
let listaFilmes = document.getElementById('listaFilmes');
formFilme.addEventListener('submit', function (event) {
    event.preventDefault();
    let filme = {
        titulo: titulo.value,
        genero: genero.value,
        ano: parseInt(ano.value)
    };
    listaFilmes.innerHTML += `
        <div class="filme-card">
            <h3>🎥 ${filme.titulo}</h3>
            <p> 🎭 Gênero: ${filme.genero}</p>
            <p> 📆 Ano: ${filme.ano}</p>
            <button class="btn-remover" onclick="this.parentElement.remove()"> <i class="fa-solid fa-trash-can"></i> </button>
        </div>
    `;
    titulo.value = '';
    genero.value = '';
    ano.value = '';
});
botaoDark.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
    


