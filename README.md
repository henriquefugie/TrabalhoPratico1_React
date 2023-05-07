# Trabalho Pratico1 de Desenvolvimento Front End: React

## Integrantes:

- Gustavo Teixeira Magalhães.
- Henrique Fugie de Macedo.
- João Vitor Dias Fernandes.

## Bibliotecas Utilizadas:

- Bibliotecas Padrão do React (UseState)

## API's Utilizadas:
- agify.io

# Explicações das Páginas

## Página Inicial:

A Pagina Inicial serve como um menu principal, possibilitando navegar pelas páginas do projeto por meio de um menu principal, que chama algumas funções principais:

 - *acessaPagina*, que reconhece a página atual e envia o usuário para a página correta.
 - *setCurrentPage* é a função que é usada para reconhecer em qual página o usuário está.
 - *window.history.pushState* que atualiza a página para a página desejada.
 - *renderPage*, que renderiza a página atual no navegador.

## Página 2:

A página 2 começa declarando dois eventos importantes: A galeria e o número da imagem. Além disso, ela também define algumas funções principais que realizarão as mudanças nas páginas:

- *defineGaleria*, que armazena as mensagens que são mostradas na tela.
- *defineNumeroImagem*, que define o número da imagem a ser inserida ou removida.
- *adicionaImagem*, que adiciona uma nova imagem na tela.
- *removeImagem*, que remove uma imagem já existente na tela.

### Os métodos *adicionaImagem* e *removeImagem*, por serem métodos importantes pro funcionamento da página, devem ser melhor especificados:

- *adicionaImagem* define variável **imagem** que concatena o path padrão da imagem ***"./galeria/cavalo"*** com o número da imagem definido na função *defineImagem*, por meio do *handleChangeImagem*. Após isso, ele redefine a galeria, adicionando a imagem selecionada.
- *removeImagem* redefine a galeria, de modo a retirar a imagem com o número setado pelo usuário, e limpa o buffer.

## Página 3:

### A Página 3 começa declarando a função que vamos usar para a lista Dropdown. Após isso, criamos 3 estados diferentes:
- *frutaSelecionada*: Que armazena a opção selecionada no menu suspenso.
- *novaFruta*: Que armazena o valor digitado pelo usuário.
- *frutas*: Que armazena a lista de frutas em si do menu suspenso.

### Em seguida, definimos três métodos importantes: handleChange, handleAddOption e handleShowSelected:

- *handleChange* é chamado sempre que o usuário seleciona uma opção no menu suspensa, e armazena no frutaSelecionada por meio do setFrutaSelecionada.
- *handleAddOption* é chamado sempre que o usuário adiciona uma nova fruta.
- *handleShowSelected* é chamado sempre que o usuário clicar no botão de **"Mostrar Fruta Selecionada"**, a função somente chama o alerta, que mostra a informação armazenada no estado *frutaSelecionada*

### O *return* retorna a tag HTML *select* que mantém nossa lista Dropdown e todas as suas funções previamente descritas no enunciado do trabalho.
    

## Página 4:



## Página 5:

