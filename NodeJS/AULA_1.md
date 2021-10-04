# NodeJS

## Para que serve?

    - Ajuda no desenvolvimento de Back End, Front end com JS;
    - Criação de Micro serviços (microaplicações);
    - Criação de APIs - [LOCAL ONDE PODEMOS DISPONIBILIZAR DADOS PARA QUE OUTROS FRONT ENDS POSSAM UTILIZÁ-LAS (WebApp, Mobile e Desktop)];
    - Scripts e Automação de códigos;
    - Machine Learning;
    - Inteligência Artificial

**Observação**: Se precisar de muito processamento, o uso do _NodeJS_ não é recomendado!

## Vantagens

    - Agilidade - tanto na execução, quanto na prototipação;
    - Alta escalabilidade;
    - Aplicação de ponta;
    - JS everywhere - linguagem muito usada;
    - Ecossistema gigante - comunidade/ módulos;

**Casos de usos**:

_Netflix/Paypal_: Java no backend e _JavaScript_ no frontend - não muito prático, pois são linguagens extremamente diferentes.
Dessa forma, unificar a linguagem através do _NodeJS_ trouxe muita eficácia e rapidez.

## Então, o que é o NodeJS?

[JS_Runtime_Environment] - ambiente de execução(mini sistema operacional):

    - Software(aplicativos e sistema) e Hardware(máquina física) conversam entre si através do sistema operacional (S.O).

**ATENÇÃO** - O _NodeJS_ [NÃO] é um framework (conjunto de regras e estratégias já aplicadas em algum 'pacote'. Ex.: Bootsrap, React, Angular), nem uma linguagem, mas sim um [AMBIENTE] que se utiliza da linguagem _JavaScript_!

## Como funciona?

**Event Loop** - é o diferencial do _NodeJS_

**Thread** é criada para 'levar' cada request até o servidor.

_NodeJS_ é single-threaded: somente uma thread que realiza o movimento de todos os requests simultaneamente;

_NodeJS_ é non-blocking: essa single-thread [NÃO] pode ser bloqueada, portanto, impedida de realizar várias ações;

_NodeJS_ é asynchronous: não fica esperando a resposta do request para atender outros requests

---

[NPM] = NODE PACKAGE MANAGER - compartilhamento de bibliotecas.
