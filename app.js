var ouvir = require(__dirname +'/neuronios/ouvir');
var somar = require(__dirname +'/neuronios/somar');
var informacao = require(__dirname +'/neuronios/informacao');
var armazenar = require(__dirname +'/neuronios/armazenar');

/*
    As expressões são expressões simples e inicialmente mantendo uma mesma forma:
    estrutura da frase: VERBO + AÇÃO ESPERADA
    Exemplo: SOME 1 + 1 ou DIVIDA 10 / 5
*/

// Só começa a processar depois do dbready
process.on('dbready', function(){
    ouvir(process.argv);

    var resposta = somar();
    if(resposta == false)
        console.log('Infelizmente sei apenas realizar operações de soma. :(');

    armazenar(ouvir, resposta);

    console.log(resposta);
});
