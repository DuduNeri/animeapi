const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const animeDialog = document.getElementById("animeDialog");
const closeDialog = document.getElementById("closeDialog");

const nomeEl = document.getElementById("nome");
const universoEl = document.getElementById("universo");
const tipoEl = document.getElementById("tipo");
const claEl = document.getElementById("cla");
const racaEl = document.getElementById("raca");
const poderEl = document.getElementById("poder");
const habilidadesEl = document.getElementById("habilidades");

function preencherDadosPersonagem(personagem) {
    nomeEl.textContent = personagem.nome;
    universoEl.textContent = personagem.universo;
    tipoEl.textContent = personagem.tipo;
    claEl.textContent = personagem.cla;
    racaEl.textContent = personagem.raca ?? "Desconhecida";
    poderEl.textContent = personagem.poder;

    habilidadesEl.innerHTML = "";
    personagem.habilidades.forEach((habilidade) => {
        const li = document.createElement("li");
        li.textContent = habilidade;
        habilidadesEl.appendChild(li);
    });
}

searchButton.addEventListener("click", async () => {
    const nomePersonagem = searchInput.value.trim();

    if (!nomePersonagem) {
        alert("Digite o nome do personagem");
        return;
    }
    try {
        const res = await axios.get(`http://localhost:8000/personagem?nome=${encodeURIComponent(nomePersonagem)}`);
        const personagem = res.data;

        preencherDadosPersonagem(personagem);
        animeDialog.showModal();
    } catch (error) {
        console.error("Erro ao buscar personagem:", error);
        alert("Personagem não encontrado ou erro ao buscar.");
    }
});

closeDialog.addEventListener("click", () => {
    animeDialog.close();
});
