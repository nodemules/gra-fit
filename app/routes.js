{
  module.exports = function(app) {

    app.get('/', function(req, res) {
      res.render('index.ejs', {
        title: 'Application'
      });
    });

    app.get('/*', function(req, res) {
      res.render('index.ejs', {
        title: 'Application'
      });
    })

  }

}
