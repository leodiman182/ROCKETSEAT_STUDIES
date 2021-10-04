# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo

* São levados em consideração  3 fatores:

1. Origem do estilo
2. Especificidade
3. Importância

## Origem do estilo

inline > tag style > tag link

```css
/* Muda o grau de "preferência" do código dependendo de qual deles você escolher


    Ex.: 
    
    ** <h1 style="color: red">

    vale mais que o 

    ** <style>
        h1 {
            color:red;
        }
        </style>

    Que vale mais que 

    ** <link rel="stylesheet" href="style.css">

    css importado de outra pasta.

```
### Especificidade

É um cálculo matemático onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

0. Universal Selector (*), combinatores e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

### Importância (regra important)

* Cuidado! Optar por não usar
* Não é considerado uma boa prática
* Quebra o fluxo natural da cascata





exemplos no <a href="https://codepen.io/your-work">CodePen</a>

```css 

/* 
    PERGUNTA:

    É mais interessante criar uma estrutura global básica e ir adicionando formatações específicas ou ir criando as formatações específicas de acordo com a necessidade de cada uma, individualmente?

*/

```