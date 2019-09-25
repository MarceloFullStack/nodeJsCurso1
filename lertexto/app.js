const fs = require('fs')

const caminho = __dirname + '/texto1.txt'
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)