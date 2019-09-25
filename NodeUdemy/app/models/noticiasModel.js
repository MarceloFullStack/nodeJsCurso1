module.exports = function(){
    this.getNoticias= function(connection, callBack){
        connection.query("select * from noticias", callBack);
    }

    this.getNoticias = function(connection, callBack){
        connection.query("select * from noticias where idNoticia = 2", callBack)
    }

    return this
}