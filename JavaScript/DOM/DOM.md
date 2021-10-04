# DOM (Documento Object Model)

*   É o HTML convertido para um objeto JavaScript
*   API [Application Programming Interface] que representa e interage com o HTML
*   Estrutura de dados do tipo árvore, criada pelo browser
*   Propriedade e métodos

# Para que?

*   JavaScript usa a DOM para se conectar com o HTML
*   Manipular o HTML com o JavaScript
*   Você só programa pra WEB porque existe a DOM

## Exemplos:

### getElementbyId()

<html>
    <body>
        <h1 id="blog-title">Meu Blog</h1>
    </body>
</hmtl>

<script>
    document.getElementbyId('blog-title')
</script>

----------------------------------------------------------------
### getElementsbyClassName()

<html>
    <body>
        <h1 class="title">Meu Blog</h1>
    </body>
</hmtl>

<script>
    document.getElementsbyClassName('title')
</script>

----------------------------------------------------------------
### getElementsbyTagName()

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    document.getElementsbyTagName('h1')
</script>

----------------------------------------------------------------
### querySelector() - seletor CSS

<html>
    <body>
        <h1 class="blog-title">Meu Blog</h1>
    </body>
</hmtl>

<script>
    document.querySelector('.blog-title')
</script>

----------------------------------------------------------------
### querySelectorAll() - seletor CSS

### Mesma função que o querySelector, mas trazendo todos que tenham o atributo deseja, ao contrário do caso anterior, que traz apenas o primeiro elemento.



## QUAL DELES USAR?

*   A diferença está no tipo de dados que será retornado:

       -    Na função [.querySelector] o tipo de dado retornado é o próprio elemento.

       -    Na função [.getElementbyId] o tipo de dado retornado é o próprio elemento.

       -    Na função [.getElementsbyClassName] o tipo de dado retornado é HTMLCollection.       

       -    Na função [.getElementsbyTagName] o tipo de dado retornado é HTMLCollection.

       -    Na função [.querySelectorAll] o tipo de dado retornado é Nodelist - permite a utilização da função forEach.


## MANIPULANDO O CONTEÚDO

-    Alterar o conteúdo de texto com:

[textContent] - (global e Nodelist)

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    const element = document.querySelector('h1')

    element.textContent = "Olá Devs!"
</script>

----------------------------------------------------------------
-    Alterar o conteúdo de texto com:

[innerText] - (HTML Collection)

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    const element = document.querySelector('h1')

    element.innerText = "Olá Devs!"
</script>

----------------------------------------------------------------
-    Alterar a estrutura do HTML com:

[innerHTML]

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    const element = document.querySelector('h1')

    element.innerHTML = "Olá Devs! <small>!!! </small>"
</script>

----------------------------------------------------------------
-    Alterar a o conteúdo da tag <input> do HTML com:

[value]

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    const element = document.querySelector('input')

    element.value = "Valor que eu quiser"
</script>

----------------------------------------------------------------
-    Alterar atributos dos elementos HTML com:

[setAttribute]

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    const element = document.querySelector('h1')

    element.setAttribute('id','blog-title')
</script>
**************************** Adiciona um ID "blog-title" ao elemento!

*   Também existem as funções:

[getAttribute]
[removeAttribute]


## ALTERANDO ESTILOS (via CSS)

[style]

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    const element = document.querySelector('body')

    element.style.backgroundColor = "#fff"
</script>

### UTILIZANDO O [classList]

(mais usados - add, remove e toggle)

<style>
    .active {
        color: red;
    }

</style>

<html>
    <body>
        <h1>Meu Blog</h1>
    </body>
</hmtl>

<script>
    const element = document.querySelector('body')

    element.classList.add('active')
    element.classList.remove('active')    
</script>

*   No caso do [toggle] ele percebe se existe ou não uma classe - se houver ele tira. Se não houver, ele adiciona! (Interruptor ON/OFF)

<script>
    const element = document.querySelector('body')

    element.classList.toggle('active')  
</script>



## Navegando pelos elementos pais

----------- Traz o elemento pai do elemento selecionado

[parentNode] e [parentElement]

<script>
    const body = document.querySelector('body')
    body.parentElement  //  [ou body.parentNode]
</script>

## Navegando pelos elementos filhos 

------------ Traz os elementos filhos do elemento selecionado

[childNodes] e [children]

<script>
    const body = document.querySelector('body')
    body.childNodes  // - que traz um Nodelist!  [ou body.children - que traz um HTML collection]
</script>

[firstChild] - leva em consideração espaços vazios e [firstElementChild] - encontra o primeiro elemento filho, ignorando os espaços!

[lastChild] - leva em consideração espaços vazios e [lastElementChild] - - encontra o último elemento filho, ignorando os espaços!


## Navegando pelos elementos irmãos


[nextSibling] (considera espaços vazios) e [nextElementSibling] - Encontram o próximo elemento dentro de um mesmo elemento pai.

[previousSibling] (considera espaços vazios) e [previousElementSibling] - Encontram o elemento anterior dentro de um mesmo elemento pai.



## Criando e adicionando elementos no HTML

[createElement] - primeiro cria um elemento para ser adicionado na DOM

[append] - usando para adicionar elementos ao HTML

<script>
    const div = document.createElement('div');
    div.innerText = "Olá Devs!"

    const body = document.querySelector('body');
    body.append(div);
</script>


## EVENTOS!!!!

(PREFIXO ON)

[onclick="function()"]

[onkeydown]
[onkeyup]


(addEventListener) para adicionar um evento! [possível stacking de funções]

### OBJETO EVENT

Atribui como parâmetro de uma função o próprio evento da mesma - ou seja, para um [onclick], o evento da função que tem como parâmetro [event] é o clique.




