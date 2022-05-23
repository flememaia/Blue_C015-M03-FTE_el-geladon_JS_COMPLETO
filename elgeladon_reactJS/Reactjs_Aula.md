OBJETIVOS DO DIA/ SEMANA
FLUXOGRAMA REACT
EXPLICAR SOBRE JSX

sensação de múltiplas páginas => por causa da componentização
baixa tudo no primeiro carregamento
qdo o usuário clica em determinada parte, abre novos componentes (já carregados) e da impressão de outras páginas

biblioteca js capasz de criar interfaces de usuário.

trechos isolados de código chamados componentes

COMPONENTES => blocos de código / funções js, que a partir deles conseguimos gerar pequenas partes da nossa tela

peças de um quebra cabeça => que podem ser combinados a formar a interface

PQ LEGAL => se eu precisar atualizar parte da minha tela, não preciso atualizar a interface como um todo

REUTILIZÁVEIS => replicá-los qtas vezes forem necessárias - sem copiar o código

CENÁRIO ATUAL =>

não é um framework. é apenas uma biblioteca. Se considerarmos todo o ecossistema que envolve o react (várias bibliotecas). => talvez pudessemos considerar um framework

por tras do desenvolvimento do React é o Facebook => empresa grande => certamente ferraetna valorizada no mercado

INSTALANDO EXTENSÕES QUE VÃO AJUDAR NO DESENVOLVIMENTO
snippets => reutilizar blocos de códicos .

diretamente pelo vscode =>

segunda extensão no proprio google chrome => nenhum efeito inicial de imediato no nosso chrome => importante para o debugg

## VÍDEO 1 => INTRODUÇÃO AO REACTJS

## VÍDEO 1 => INSTALANDO EXTENSÕES (SNIPPETS) E DEVELOPER TOOLS

## VÍDEO 3 => REACTJS MÃO NA MASSA

1. documentação oficial => reactjs

   ### CRIANDO UM PROJETO

npx => instalação de pacotes hospedados no npm, SEM necessáriamente estes pacotes estarem instalados localmente
npm => gerenciador de pacotes para NodeJS. => npm fará o download e gerenciamento das bibliotecas a serem utilizadas em um projeto JS.

################## CÓDIGO

digitar no terminal

```js
    npx create-react-app elgeladon_reactjs

```

1. ultimo parámetro é o nome da nossa aplicação

2. O Q É O NPX => tool kit desenvolvido pelo facebook que fornece algumas configurações básicas para criação de projetos em React

digitar no terminal npx create-react-app cardapio-elgeladon

vou efetivamente me conectar com o npm e fazer a instalação dos pacotes necessários

pode ser q demore => depende da máquina / conexao internet

cria uma pasta elgeladon_reactjs

    ## entrando em cardapi-el-geladon

1. node_modules => pasta que guarda todos os pacotes e dependências que a sua aplicaçaõ precisa para funcionar
2. public com basico index.html => APAGAR manifest e robot
3. .gitignore
   pagackage.json => dependencias que meu meu projeto precisa pra funcionar
   package-lock.json => VERIFICAR MELHOR
4. SRC => dentro dessa pasta que vamos trabalhar => PASTA PRINCIPAL

Para executá-lo => navegar até a pasta => cd cardapio-el-geladon
npm start => sobre um servidor web já contendo o básico do meu projeto => pode demorar tb (a depender da configuração da maquina)

save to reload

OFICIALMENTE CRIAMOS UM PROJETO BÁSICO DE REACT

    # customizando

apagar o que não interessa na pasta SRC => apagou tudo :(

criar um index.js

    # index.js

```js
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);
```

imports => 2 bibliotecas

1. react em si
2. react-dom => para renderizar os componentes em tela

ReactDOM sendo importado do pacote react-dom

acionei o metodo render que já existe na biblioteca ReactDOM
vai literalmente renderizar o conteudo que esta dentro do render() (elemento html root)

<React.StrictMode></React.StrictMode> => não vai fazer nada visual => vai sinalizar se houver erros

public/ index.html => possui uma div com o id="root"

é dentro desta div que todos os componentes serão renderizados.

=> CODIGO DE NOVO

Incluir o Hello World entre as tags React.StrictMode

=> corrigir para a versão 17 => no terminal

```js
    npm install react@17.0.0 react-dom@17.0.0

```

voltando para a última versão

```js
    npm install react react-dom

```

    ## ARRUMAR PRA SER COMPÁTIVEL COM REACT18

import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// ReactDOM.render(
// <React.StrictMode>Hello World</React.StrictMode>,
// document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<React.StrictMode>Hello World</React.StrictMode>);

    ## MOSTRAR aba inspecionar no final tem o Components and Profiler

## VÍDEO 4 => jsx

    Conceito novo dentro do react => mistura js com html
    renomear index.jsx

1. Criando o primeiro componente HOME

src/components/ Home.jsx e Home.css

    # componentes

1. tem a primeira letra maiúscula
2. são funções
3. todo componente precisa ser exportado para que possa ser utilizado em outros componentes

```js
function Home() {
  return <div className="Home">Este é o componente Home</div>;
}

export default Home;
```

4. importar onde eu quero utiliza-lo => importar no index e utilizá-lo como se fosse um tag

```js
(...)
root.render(
  <React.StrictMode>
    // *************NOVO TECHO
    <Home />
    // *************NOVO TECHO
  </React.StrictMode>
);
```

index.jsx completo

```js
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// *************NOVO TECHO
import Home from "./components/Home"; // não precisa colocar a extensão.jsx => ele já entende
// *************NOVO TECHO

// ReactDOM.render(
//   <React.StrictMode>Hello World</React.StrictMode>,
//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    // *************NOVO TECHO
    <Home />
    // *************NOVO TECHO
  </React.StrictMode>
);
```

5. mostrar no browser
6. mostrar importando várias vezes o componente <Home />

```js
<React.StrictMode>
  <Home />
  // *************NOVO TECHO
  <Home />
  <Home />
  // *************NOVO TECHO
</React.StrictMode>
```

7. voltar pra ter apenas 1 vez o componente <Home />
8. estilizando nosso componente Home

   - 8.1 importar o arquivo Home.css

     ```js
     import "./Home.css";
     ```

   - 8.2 arquivo css

   ```css
   .Home {
     position: relative;
     background-image: radial-gradient(
       farthest-corner at 40px 40px,
       #50c5ee 60%,
       rgba(0, 212, 255, 0.5) 100%
     );
     min-height: calc(100vh - 60px);
     margin: 15px;
     padding: 15px;
     border-radius: 20px;
     color: black;
     box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
   }
   ```

9. estilizando o index.css e importando no index.jss

   - 9.1 importar o arquivo Home.css

   ```js
   import "./index.css";
   ```

   - 9.2 arquivo css

   ```css
   @import url("https://fonts.googleapis.com/css?family=Exo:400,700");

   body,
   html {
     margin: 0;
     padding: 0;
     width: 100%;
     min-height: 100vh;
     overflow: auto;
     background-color: rgb(53, 139, 190);
     font-family: sans-serif;
   }
   ```

## VÍDEO 5 => Lista e dados mocados => arquivo que nós mesmo criamos

Interface de programação de Aplicativos => \*API (Application Programming Interface ou Interface de Programação de Aplicativos) é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web.

1. criando o mock
   src/mocks/paletas.js

```js
const paletas = [{}, {}, {}];
```

2. copiando do arquivo inteiro + "export"

```js
export const paletas = [
  {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/acai-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Banana com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/banana-com-nutella.png").default,
    preco: 10.0,
    sabor: "Banana",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Chocolate Belga",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/chocolate-belga.png").default,
    preco: 7.0,
    sabor: "Chocolate Belga",
    possuiRecheio: false,
  },
  {
    titulo: "Chocolate Belga com Brigadeiro",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/chocolate-belga-com-brigadeiro.png").default,
    preco: 10.0,
    sabor: "Chocolate Belga",
    recheio: "Brigadeiro",
    possuiRecheio: true,
  },
  {
    titulo: "Chocolate Branco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/chocolate-branco.png").default,
    preco: 7.0,
    sabor: "Chocolate Branco",
    possuiRecheio: false,
  },
  {
    titulo: "Coco",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/coco.png").default,
    preco: 7.0,
    sabor: "Coco",
    possuiRecheio: false,
  },
  {
    titulo: "Coco com Doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/coco-com-doce-de-leite.png").default,
    preco: 10.0,
    sabor: "Coco",
    recheio: "Doce de Leite",
    possuiRecheio: true,
  },
  {
    titulo: "Cookies",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/cookies.png").default,
    preco: 7.0,
    sabor: "Cookies",
    possuiRecheio: false,
  },
  {
    titulo: "Doce de Leite com Doce de Leite",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/doce-de-leite-com-doce-de-leite.png").default,
    preco: 10.0,
    sabor: "Doce de Leite",
    recheio: "Doce de Leite",
    possuiRecheio: true,
  },
  {
    titulo: "Limão",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/limao.png").default,
    preco: 7.0,
    sabor: "Limão",
    possuiRecheio: false,
  },
  {
    titulo: "Maracujá",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/maracuja.png").default,
    preco: 7.0,
    sabor: "Maracujá",
    possuiRecheio: false,
  },
  {
    titulo: "Maracujá com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/maracuja-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Maracujá",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Milho Verde",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/milho-verde.png").default,
    preco: 7.0,
    sabor: "Milho Verde",
    possuiRecheio: false,
  },
  {
    titulo: "Morango",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/morango.png").default,
    preco: 7.0,
    sabor: "Morango",
    possuiRecheio: false,
  },
  {
    titulo: "Morango com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/morango-com-leite-condensado.png").default,
    preco: 10.0,
    sabor: "Morango",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  },
  {
    titulo: "Morango com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/morango-com-nutella.png").default,
    preco: 10.0,
    sabor: "Morango",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Ninho com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/ninho-com-nutella.png").default,
    preco: 10.0,
    sabor: "Ninho",
    recheio: "Nutella",
    possuiRecheio: true,
  },
  {
    titulo: "Ninho com Ovomaltine",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/ninho-com-ovomaltine.png").default,
    preco: 10.0,
    sabor: "Ninho",
    recheio: "Ovomaltine",
    possuiRecheio: true,
  },
  {
    titulo: "Uva",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/uva.png").default,
    preco: 7.0,
    sabor: "Uva",
    possuiRecheio: false,
  },
];
```

explicando fot => utilizamos uma função require que aponta pro arquivo da imagem
foto: require("assets/images/acai-com-leite-condensado.png").default,

2. download das imagens

## VÍDEO 6 => Renderizando o mock em tela

1. configurações => configurar o jsconfig.json => permitir import absoluto => facilitar a importação

na pasta raiz do meu projeto, criar jsconfig.json

    ```json
    {
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
    }
    ```

2. Novo Componente PaletaLista.jsx + PaletaList.css

```js
import "./PaletaLista.css";

function PaletaLista() {
  return <div className="PaletaLista">Este é o componente PaletaLista</div>;
}

export default PaletaLista;
```

3. importar <PaletaLista /> dentro do componete Home

```js
import "./Home.css";

// *************NOVO TECHO
import PaletaLista from "./PaletaLista";
// *************NOVO TECHO

function Home() {
  return (
    <div className="Home">
      // *************NOVO TECHO
      <div className="Home__container">
        <PaletaLista />
      </div>
      // *************NOVO TECHO
    </div>
  );
}

export default Home;
```

4. Voltar em PaletaList.jsx e crir de fato o componente

recurso Emmet do VsCode
div.PaletaListItem => ja cria a div com a class PaletaListItem
div\*4 => cria 4 divs pra mim
metodo require devolve um objeto e normalmente, dentro da propriedade default tem o caminho da imagem. porém ele não localizou.

```js
import "./PaletaLista.css";

function PaletaLista() {
  return (
    <div className="PaletaLista">
      <div className="PaletaListItem">
        <div className="PaletaListaItem__titulo">
          Doce de Leite com Doce de Leite
        </div>
        <div className="PaletaListaItem__preco">R$ 10,00</div>
        <div className="PaletaListaItem__descricao">
          Quam vulputate dignissim suspendisse in est ante in nibh mauris.
        </div>

        <div className="PaletaListaItem__acoes Acoes">
          <button className="Acoes__adicionar Acoes__adicionar--preencher">
            adicionar
          </button>
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={require("../assets/images/doce-de-leite-com-doce-de-leite.png")}
        alt="Paleta de Doce de Leite"
      />
    </div>
  );
}

export default PaletaLista;
```

5. estilizar o Home.css

```css
/* ... */
/* NOVO TRECHO */
.Home__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 350px) {
  .Home__container {
    justify-content: unset;
  }
}
```

6. estilizar o PaletaLista.css

```css
.PaletaLista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px 50px;
}

@media (max-width: 1220px) {
  .PaletaLista {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 840px) {
  .PaletaLista {
    grid-template-columns: 1fr;
  }
}

.PaletaListaItem {
  font-family: "Exo";
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 10px;
  width: 315px;
  display: flex;
  justify-content: space-around;
}

@media (max-width: 400px) {
  .PaletaListaItem {
    width: 210px;
    height: 180px;
  }
}

.PaletaListaItem > div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.PaletaListaItem__titulo {
  font-size: 1.5em;
  font-weight: 700;
  line-height: 100%;
}

.PaletaListaItem__descricao {
  font-size: 0.85em;
}

.PaletaListaItem__preco {
  color: darkviolet;
}

.Acoes {
  display: flex;
  justify-content: space-between;
}

.Acoes__adicionar,
.Acoes__remover {
  border: none;
  color: white;
  border-radius: 5px;
  font-family: "Exo", sans-serif;
  padding: 5px;
  max-width: 280px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  width: 48%;
}

.Acoes__remover {
  background-color: red;
}

.Acoes__adicionar {
  background-color: darkviolet;
}
.Acoes__adicionar--preencher {
  width: 100%;
}

.PaletaListaItem__foto {
  height: 150px;
  margin-right: -60px;
}
```

MAIS IMPORTANTE 7. Renderizar as paletas de forma dinâmica pelo nosso mock

interação => percorre cada elemento da lista para que possamos exibir em tela
map invoca uma função callback que é passada como argumento para cada elemento do array e devolve um novo array como resultado
função callback é uma função q é passada como parâmetro de outra função

PaletaLista.jsx

```js
import { paletas } from "../mocks/paletas";

// NOVO TRECHO
import "./PaletaLista.css";

// console.log(paletas);

// NOVO TRECHO

// TRECHO ALTERADO PRA EXIBIR DINAMICAMENTE
function PaletaLista() {
  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <div className="PaletaListItem">
          <div>
            <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
            <div className="PaletaListaItem__preco">
              R${paleta.preco.toFixed(2)}
            </div>
            <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
            <div className="PaletaListaItem__acoes Acoes">
              <button className="Acoes__adicionar Acoes__adicionar--preencher">
                adicionar
              </button>
            </div>
          </div>
          <img
            className="PaletaListaItem\_\_foto"
            src={paleta.foto}
            alt={`Paleta de ${paleta.sabor}`}
          />
        </div>
      ))}
    </div>
  );
  // TRECHO ALTERADO PRA EXIBIR DINAMICAMENTE
}
```

## VÍDEO 7 => Configurando Keys

1. Verificando os logs => "Each child in a list should have a unique "key" prop"

volta em PaletaLista.jsx

```js
// ...
 {paletas.map((paleta, index) => (
    //  INCLUSÃO DO KEY => precisa ser único
        <div className="PaletaListItem" key={`PaletaListaItem - ${index}`}>
          <div>
            (...)
     </div>
      ))}
```

## VÍDEO 8 => Hooks

1. adicionar o logo Elgeladon e icone sacola
2. Estilização HEADER na Home

```js
import PaletaLista from "./PaletaLista";
import "./Home.css";
{
  /* NOVO TRECHO */
}

import sacola from "../assets/icons/sacola.svg";
import logo from "../assets/logo.svg";
{
  /* FIM DO NOVO TRECHO */
}

function Home() {
  return (
    <div className="Home">
      {/* NOVO TRECHO */}
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img
              src={logo}
              width="70px"
              alt="Logo El Geladon"
              className="Logo__icone"
            />
            <span className="Logo__titulo"> El Geladon </span>
          </div>
          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img
                src={sacola}
                width="40px"
                className="Sacola__icone"
                alt="Sacola de compras"
              />
            </div>
          </div>
        </div>
      </div>
      {/* NOVO TRECHO */}

      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
```

```css
.Header {
  max-width: 1110px;
  margin: 0 auto 25px auto;
  position: relative;
}

.row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0 35px 0;
}

.Logo {
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 340px;
  height: 45px;
}

.Logo__titulo {
  position: absolute;
  left: 55px;
  font-family: "Exo";
  font-weight: 700;
  font-size: 2.5em;
}

.Logo__icone {
  position: absolute;
  left: -20px;
  top: -15px;
}

.Sacola {
  position: relative;
}

.Sacola__icone {
  cursor: pointer;
}

.Sacola__badge {
  background-color: red;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  color: white;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  bottom: 0;
  right: 0;
}

@media (max-width: 1220px) {
  .Header {
    max-width: 720px;
  }
}

@media (max-width: 840px) {
  .Header {
    max-width: 320px;
  }
}

@media (max-width: 400px) {
  .Header {
    max-width: 250px;
  }

  .row {
    column-gap: 20px;
  }

  .Logo__titulo {
    font-size: 1.5em;
  }
}
```

1. link documentação React => Hooks permite ligar-se aos recursos de state e ciclo de vida do React a partir de componentes funcionais.

    ### useState => lida com os estados da nossa aplicação

1. importar

```js
import React, { useState } from "react";
```

2. instanciar => desestruturação de array

```js
const [paletaSelecioanda, setPaletaSelecionada] = useState({});
```

- 2.1 = valor atual
- 2.2 = função que vai atualizar o valor atual

3. construir adicionarItem

```js
const adicionarItem = (paletaIndex) => {
  //   construindo um objeto: a chave vai ser o índice e o valor vai ser quantas vezes clicou na paleta
  // || 0

  const paleta = {
    [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
  };
  // chama o método que atualiza o state paleta selecionada e passa o objeto inicial e substitui as informações do objeto construido acima
  setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
};
```

4. configurar o botão ADICIONAR => IMPORTANTE a função é passada como referência => ou seja, só sera invocada qdo ocorrer onclick (tem uma função e como callback dessa função, ele passa a função adicionarItem e passar o index como parametro da função )

```js
<div className="PaletaListaItem__acoes Acoes">
  <button
    className="Acoes__adicionar Acoes__adicionar--preencher"
    onClick={() => adicionarItem(index)}
  >
    adicionar
  </button>
</div>
```

para conseguirmos visualizar o que está sendo adicionando, vamos incluir uma badge

```js

<div className="PaletaListItem" key={`PaletaListaItem - ${index}`}>
            {/* chama o nosso state paletaSelecionada na posição do index */}
          <span className="PaletaListaItem__badge">{paletaSelecionada[index] || 0}</span>
```

```css
.PaletaListaItem {
  /* ... */
  /* incluir */
  position: relative;
}

/* badge */
.PaletaListaItem__badge {
  background-color: greenyellow;
  width: 20px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  color: black;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -9px;
  left: -9px;
}
```

```js

```

```css

```

```js

```

```css

```

# JSX

1. class => className
2. return => entre () + retorna apenas 1 unica coisa => envelopado em <div></div> se estiver retornando várias coisas.
3. string => pode digitar direto na tela
4. variáveis precisam estar {}
5. objetos/ array não é renderizado => percorrer e renderizar cada info
6. CamelCase => onclick = onClick, propriedade css etc

# COMPONENTES

1. iniciam com letra maiúscula
2. são funções que retornam jsx

# KEY

1. permite identificar cada elemento de uma lista do React e somente rerenderizar se for alterado.
2. precisa ser único => index não é a melhor opção.

# STATE

1. guarda dados e quando alterado, gera uma nova renderização em tela => ou seja, o componente é atualizado.

```

```

ARRUMAR NESSE SCRIPT => incluir node_modules no .gitignore e package-lock.json
desestruturação de objeto
conceitos de que o React manipula o DOM por debaixo dos panos
e rerenderiza apenas o item que foi modificado
