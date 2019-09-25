module.exports = function(app){
    app.get("/adm", function(req, res) {
        res.render("admin/form_add_noticia");
      });
   
      app.post("/noticias/salvar", function(req, res) {
        var noticias = req.body
        res.send('noticias');
      });
}