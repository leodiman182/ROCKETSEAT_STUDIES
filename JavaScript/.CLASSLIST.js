/*
    BOTÕES QUE MUDAM A COR DO FUNDO


    <HTML>
    <button onclick="green()">Verde</button>
    <button onclick="red()">Vermelho</button>
    <button onclick="blue()">Azul</button>
    </HTML>

    <script>
function green() {
    document.querySelector('#example').classList.remove('red');
    document.querySelector('#example').classList.remove('blue');
    document.querySelector('#example').classList.add('green');
}

function red() {
    document.querySelector('#example').classList.remove('green');
    document.querySelector('#example').classList.remove('blue');
    document.querySelector('#example').classList.add('red'); 
};

function blue() {
    document.querySelector('#example').classList.remove('red');
    document.querySelector('#example').classList.remove('green');
    document.querySelector('#example').classList.add('blue');
};

*/

/*

MUDANDO DE UMA COR PARA OUTRA USANDO CLASSLIST.


<HTML>
    <button onclick="change()" class="green">Clique aqui para ver a mágina</button>
</html>

STYLE
.green {
    background-color: lightgreen;
    margin: 1vw;
}

.black {
    background-color: black;
    color: white;
    margin: 1vw;
}


JS

function change() {
    if (document.querySelector('button').classList.contains('black')) {
        document.querySelector('button').classList.remove('black');
        document.querySelector('button').classList.add('green');
    } else {
        document.querySelector('button').classList.remove('green');
        document.querySelector('button').classList.add('black');
    }   
}
*/