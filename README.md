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

