/*objetivos:
0 obter usuarios
1 obter o numero do telefone de um usuario a partir do seu id 
2 obter o endereco do usuario pelo id*/

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date()
    });
  }, 1000);
}
function obterTelefone(idusuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "88554",
      ddd:'011'
    });
  }, 2000);
}
function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    });
  }, 2000);
}

function resolverUsuario(error, usuario) {
  console.log("usuario", usuario);
}
//**************************************************/
obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("Deu Ruim em usuario", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("Deu Ruim em Telefone", error);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error("Deu Ruim em endereco", error);
        return;
      }
      console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua},${endereco.numero},
            Telefone: (${telefone.ddd})${telefone.telefone}
            `);
    });
  });
});
//**********************************************************/
// const usuario = obterUsuario()
// const usuario = obterTelefone()

// console.log('usuario', telefone)
