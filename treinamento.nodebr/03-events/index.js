const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor()

const nomeEvento ='usuario:click'

meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou', click)
})





// meuEmissor.emit(nomeEvento, 'clicou na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'clicou no ok')


// let cout =0

// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'clicou no ok' + cout++)
// }, 1000);

const stdin = process.openStdin()
stdin.addListener('data', function(value){
    console.log(`voce digitou: ${value.toString().trim()}`)
})