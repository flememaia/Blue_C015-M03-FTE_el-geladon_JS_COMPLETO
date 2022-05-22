const baseUrl = "https://el-geladon-backend-by-ip.herokuapp.com/paletas";

// LISTAR TODAS AS PALETAS
async function findAllPaletas() {
  const response = await fetch(`${baseUrl}/find-paletas`);

  const paletas = await response.json();
  console.log("paletas", paletas)

  paletas.forEach((paleta) => {
    document.getElementById("paletaList").insertAdjacentHTML(
      "beforeend",
      `<div class="PaletaListaItem">
        <div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(
              2
            )}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
          </div>
            <img class="PaletaListaItem__foto" 
            src=${paleta.foto}
             alt=${`Paleta de ${paleta.sabor}`} />
        </div>`
    );
  });
};

findAllPaletas();

// PESQUISAR POR UMA PALETA
const findPaletaById = async () => {
    const id = document.getElementById("idPaleta").value;
    const response = await fetch(`${baseUrl}/find-paleta/${id}`);
    const paleta = await response.json();

    console.log("paleta", paleta)
  
    const paletaEscolhidaDiv = document.getElementById("paletaEscolhida");
  
    paletaEscolhidaDiv.innerHTML = `<div class="PaletaCardItem">
      <div>
        <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
        <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
        <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
      </div>
        <img class="PaletaCardItem__foto" src=${
          paleta.foto
        } alt=${`Paleta de ${paleta.sabor}`} />
    </div>`;
  };

// MODAL

function abrirModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "flex";
}

function fecharModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "none";
}
