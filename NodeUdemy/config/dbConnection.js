var mysql = require("mysql");


var connMysql = function(){

    console.log('conexao estabelecida')

    return mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "123",
      database: "portalNoticias"
    });
}

module.exports = function (){
  console.log('autoload carregou modo de conexao com banco de dados')
  return connMysql
}