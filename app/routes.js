{
  module.exports = function(app) {

    app.get('/', function(req, res) {
      res.render('index.ejs', {
        title: 'GraFit Application'
      });
    });

    app.get('/*', function(req, res) {
      res.render('index.ejs', {
        title: 'GraFit Application'
      });
    })

  }

}
