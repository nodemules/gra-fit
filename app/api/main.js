{
  function main(express) {

    var api = express.Router();

    api.use((req, res, next) => {
      console.log('An API request has been made');
      next()
    })
  }

  module.exports = main;
}
