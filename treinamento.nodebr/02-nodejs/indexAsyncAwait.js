/*objetivos:
0 obter usuarios
1 obter o numero do telefone de um usuario a partir do seu id 
2 obter o endereco do usuario pelo id*/

//importamos um modulo interno do nodejs pra resolver promises
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePrimese(resolve, reject){

    setTimeout(function() {
      // return reject(new Error('deu ruim de verdade'))


      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date()
      });
    }, 1000);

  })
}
function obterTelefone(idusuario) {
  return new Promise(function resolverPromise(resolve, reject){

    setTimeout(() => {
      return resolve({
        telefone: "88554",
        ddd:'011'
      });
    }, 2000);

  })
}
function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    });
  }, 2000);
}

main()
async function main(){

  try{
    console.time('medida-promise')

    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)


    ])

    const endereco = resultado[1]
    const telefone = resultado[0]
    console.log(`
      Nome:${usuario.nome},
      Telefone:(${telefone.ddd}) ${telefone.telefone},
      Endereco:${endereco.rua}, ${endereco.numero}
    `)
    console.timeEnd('medida-promise')
  }
  catch(error) {
    console.error('deu ruim', error)
  }

}

//************************************************************************************** */
// const usuarioPromise = obterUsuario()

// usuarioPromise
//     .then(function(usuario){
    
//     return obterTelefone(usuario.id)
//     .then(function resolverTelefone(result){
//       return {
//         usuario:{
//           nome:usuario.nome,
//           id:usuario.id
//         },
//         telefone:result
//       }
//     })  
//     })
//     .then(function(resultado){
//       const endereco = obterEnderecoAsync(resultado.usuario.id)
//       return endereco.then(function resolverEndereco(result){
//         return{
//           usuario:resultado.usuario,
//           telefone:resultado.telefone,
//           endereco:result
//         }
//       })
//     })
//     .then(function(resultado){
//     console.log(`
//     Nome:${resultado.usuario.nome}
//     Endereco:${resultado.endereco.rua}, ${resultado.endereco.numero}
//     Telefone:(${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//     `)
// })
//     .catch(function(error){
//     console.error('deu ruim', error)
// })

//**************************************************/
// obterUsuario(function resolverUsuario(error, usuario) {
//   if (error) {
//     console.error("Deu Ruim em usuario", error);
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.error("Deu Ruim em Telefone", error);
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//       if (error2) {
//         console.error("Deu Ruim em endereco", error);
//         return;
//       }
//       console.log(`
//             Nome: ${usuario.nome},
//             Endereco: ${endereco.rua},${endereco.numero},
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `);
//     });
//   });
// });
//**********************************************************/
// const usuario = obterUsuario()
// const usuario = obterTelefone()

// console.log('usuario', telefone)
