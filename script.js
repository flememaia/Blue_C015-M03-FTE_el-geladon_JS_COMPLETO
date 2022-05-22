const baseUrl = "https://el-geladon-backend-by-ip.herokuapp.com/paletas";

// LISTAR TODAS AS PALETAS
async function findAllPaletas() {
  const response = await fetch(`${baseUrl}/find-paletas`);

  const paletas = await response.json();
  console.log("paletas", paletas)

  paletas.forEach((paleta) => {
    let isEdit = true
    document.getElementById("paletaList").insertAdjacentHTML(
      "beforeend",
      `<div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}"><div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(
              2
            )}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>

          <div class="PaletaListaItem__acoes Acoes">
            <button class="Acoes__editar" id=${paleta._id} onclick="abrirModal(${isEdit})">editar</button>
            <button class="Acoes__deletar" onclick="deletePaleta()">deletar</button>
          </div>

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
    let isEdit = true

    const paletaEscolhidaDiv = document.getElementById("paletaEscolhida");
  
    paletaEscolhidaDiv.innerHTML = `
    <div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}"><div>
        <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
        <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
        <div class="PaletaCardItem__descricao">${paleta.descricao}</div>

        <div class="PaletaListaItem__acoes Acoes">
          <button class="Acoes__editar" id=${paleta._id} onclick="abrirModal(${isEdit})">editar</button>
          <button class="Acoes__deletar" onclick="deletePaleta(${paleta._id})">deletar</button>
        </div>

      </div>
        <img class="PaletaCardItem__foto" src=${
          paleta.foto
        } alt=${`Paleta de ${paleta.sabor}`} />
    </div>`;
  };


// MODAL
// ALTERAÇÃO EM RELAÇÃO À APOSTILA E VÍDEOS => utilizar a flag isEdit pra sinalizar que o onclick vem do botão editar. 

async function abrirModal(isEdit = false) {
  if(isEdit){
    document.querySelector("#title-header-modal").innerText = "Atualizar uma paleta"
    document.querySelector("#button-form-modal").innerText = "Atualizar"
    
    // console.log("event.target", event.target.id) // identificar o id da paleta => explico melhor segunda sobre eventos. 
    // console.log("isEdit", isEdit)

    const id =   event.target.id  
    // console.log("id", id)
    
    const response = await fetch(`${baseUrl}/find-paleta/${id}`);
    const paleta = await response.json();

    document.querySelector("#id").value = paleta._id;
    document.querySelector("#sabor").value = paleta.sabor;
    document.querySelector("#preco").value = paleta.preco;
    document.querySelector("#descricao").value = paleta.descricao;
    document.querySelector("#foto").value = paleta.foto;
  } 
  else {
    document.querySelector("#title-header-modal").innerText = "Cadastrar uma paleta"
    document.querySelector("#button-form-modal").innerText = "Cadastrar"

  }
  document.querySelector(".modal-overlay").style.display = "flex";
}

function fecharModalCadastro() {
  document.querySelector(".modal-overlay").style.display = "none";

  document.querySelector("#sabor").value = "";
  document.querySelector("#preco").value = 0;
  document.querySelector("#descricao").value = "";
  document.querySelector("#foto").value = "";
}

// CADASTRAR UMA PALETA => função alterada para contemplar CADASTRAR e EDITAR 
// CADASTRAR E EDITAR PALETA
async function submitPaleta() {
  const id = document.getElementById("id").value;
  const sabor = document.querySelector("#sabor").value;
  const preco = document.querySelector("#preco").value;
  const descricao = document.querySelector("#descricao").value;
  const foto = document.querySelector("#foto").value;

  const paleta = {
    id,
    sabor,
    preco,
    descricao,
    foto,
  };

  const modoEdicaoAtivado = !!id // transforma valor em booleano => explico melhor segunda sobre eventos. 

  const endpoint = baseUrl + (modoEdicaoAtivado ? `/update/${id}` : '/create');

  const response = await fetch(endpoint, {
    method: modoEdicaoAtivado ? "put" : "post",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(paleta),
  });

  const novaPaleta = await response.json();

  let isEdit = true
  const html = `<div class="PaletaListaItem" id="PaletaListaItem_${paleta._id}"><div>
      <div class="PaletaListaItem__sabor">${novaPaleta.sabor}</div>
      <div class="PaletaListaItem__preco">R$ ${novaPaleta.preco.toFixed(2)}</div>
      <div class="PaletaListaItem__descricao">${novaPaleta.descricao}</div>

      <div class="PaletaListaItem__acoes Acoes">
        <button class="Acoes__editar"  id=${paleta._id} onclick="abrirModal(${isEdit})">editar</button>
        <button class="Acoes__deletar" onclick="deletePaleta()">deletar</button>
      </div>

    </div>
      <img class="PaletaListaItem__foto" src=${
        novaPaleta.foto
      } alt=${`Paleta de ${novaPaleta.sabor}`} />
    </div>`;
  
  if (modoEdicaoAtivado) {
    document.getElementById(`PaletaListaItem_${id}`).outerHTML = html;
  } else {
    document.getElementById("paletaList").insertAdjacentHTML("beforeend", html);
  }

  document.getElementById("id").value = "";

  fecharModalCadastro();
  document.location.reload(true); // atualizar a página. Se chamarmos a fecthAllPaletas, vai adicionar 2x na tela 
};

