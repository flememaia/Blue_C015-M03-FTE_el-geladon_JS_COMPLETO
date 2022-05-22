# Projeto ELGeladon 
### construindo uma aplicação com JS Vanilla e consumindo uma API via fetch() 

Verificar comentários nos 3 arquivos indicando:
    HEADER => html e css
    PESQUISAR POR UMA PALETA => html, css e script 
    LISTAR TODAS AS PALETAS => html, css e script
    MODAL => html, css e script
    CADASTRAR UMA PALETA => script 

## Primeiro commit - Aula 01
### Listar todas as paletas 
### Pesquisar por uma paleta 

## Segundo commit - Aula 02 - parte 1
### Modal (botão cadastrar ainda sem funcionalidade)

## Terceiro commit - Aula 02 - parte 2
### Cadastrar uma paleta

## Quarto commit - Aula 03 - parte 1 - Edit
### Editar uma paleta

## Quinto commit - Aula 03 - parte 2 - Deletar
### Editar uma paleta

## BONUS 
## Sexto commit - utilizando icone no botão editar (fontawesome)
## Sétimo commit - pesquisando por nome no front (constinuamos pesquisando por id na API)

## OBSERVAÇÕES 
#### problema servidor => Heroku estava fora do ar na sexta a noite devido manutenção. 
#### problema renderizar images => o caminho das imagens estava errado (tinha deletado sem querer a pasta assets quando subi no github). ATENÇÃO => SEMPRE CONFERIR O ENDEREÇO DA IMAGEM E NOMES DOS ARQUIVOS. 
#### editar uma paleta => ajustes em relação à apostila: 
1. passar um valor booleano (isEdit) pra identificar se o onclick veio do EDITAR ou do CADASTRAR
2. recuperar o id através de delegação de eventos (identofocar qual botão sofreu o evento de onclick e recuperar o id). *** VOU EXPLICAR MELHOR SOBRE EVENTOS. 
3. na função submitPaleta => precisamos apenas verificar se a flag "modoEdicaoAtivado" possui um valor ou não. Como nosso id não é um número (no exemplo do vídeo e apostila é um número), não podemos fazer a comparação ```js id > 0 ``` precisamos apenas verificar se estamos recuperando ou não um valor de id. *** VOU EXPLICAR MELHOR SOBRE TRANSFORMAR QUALQUER VALOR EM BOOLEANO, UTILIZANDO "!!".
4. Refresh da página quando adicionar ou atualizar uma paleta
```js 
  document.location.reload(true);
``` 
#### deletar uma paleta => ajustes em relação à apostila: 
1. recuperar o id através de delegação de eventos (identofocar qual botão sofreu o evento de onclick e recuperar o id). *** VOU EXPLICAR MELHOR SOBRE EVENTOS. 
2. Refresh da página quando adicionar ou atualizar uma paleta
```js 
  document.location.reload(true);
``` 
#### fontawesome
1. criar um cadastro em http://fontawesome.io/ clicando em "start for free" => nesta etapa, você precisa apenas incluir seu email
2. verifique o email enviado pelo font awesome => click no link pra finalizar seu cadastro (cadastrar uma senha completar algumas informações) e começar a utilizar
3. click em All set. Lets go!
4. vai abrir uma página com o link a ser incluído no seu html (o "XXXXX" representa o seu códico pessoal)=> 
```html
<script src="https://kit.fontawesome.com/XXXXXXX.js" crossorigin="anonymous"></script>
```
5. Clicar em "Find and Add Any of Our Free Icons to a Project" => aqui você pode pesquisar pelos ícones (em ingles)
6. adicionar o trecho de código ao seu arquivo js ou html.
ex: 
```js 
<i class="fa-solid fa-trash-can"></i> 
```
## pesquisando uma paleta por nome 
1. Ajustr o atributo placeholder no html 
``` html
    <input type="text" id="idPaleta" placeholder="Digite o nome da paleta e clique em 'Escolher'" />
```
2. declarar a variável paletas (utilizada na função findAllPaletas()) no escopo global (para que ela possa ser acessada também fora da função findAllPaletas())
3. Atualizar a função findPaletaById(): 
    - 3.1 recuperar o valor do input digitado pelo usuário (igual fazíamos com o id)
    - 3.2 procurar o id da paleta digitada pelo usuário, utilizando a lista de paletas salva na variável paletas e pesquisando pelo nome digitado. 
    - 3.3 uma vez identificado o id, fazer a requisição na API com este id, igual fazíamos na busca por id. 

*OBSERVAÇÃO => se o usuário digitar o nome da paleta diferente de como está cadastrado no back, não conseguiremos encontrá-la na lista de paletas. 
OPORTUNIDADE => "NORMALIZAR" a informação digitada pelo usuário e a pesquisada na lista (transformar ambas em lowercase + substituir caracteres especiais - como acento do sabor açaí - + remover espaços em branco adicionais que o usuário possa ter digitado por engano.)*
