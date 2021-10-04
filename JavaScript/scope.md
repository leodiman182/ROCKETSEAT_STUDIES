# Scope

* Escopo determina a visibilidade de alguma varíavel no JS

# Block statement

```js
// vamos iniciar um bloco
{
// aqui dentro é um bloco e eu posso colocar qualquer código

} // aqui fechamos o bloco
```
O bloco também criará um novo escopo. Chamamos de `block-scoped`







# var
```js
// var é global e poderá funcionar fora de um escopo de bloco - e também é global

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

//console.log('> existe x depois do bloco?', x)
```

## let e const
```js
// let e const são locais e só funcionam no escopo onde foi criada
let y = 1;
    {
        y = 0
        console.log('> existe y ? ', y)        
    }

    console.log('> existe y depois do bloco? ', y)

    const z = 1
        {
            const z = 0
            console.log('> existe y ', y)
        }
        // a menos que seja criado um escopo acima, a constante nunca deverá ser alterada!
```
