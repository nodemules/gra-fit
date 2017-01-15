{
  function main(express) {
    var api = express.Router();

    api.use((req, res, next) => {
      console.log('An API request has been made');
      next()
    })

    return api;
  }

  module.exports = main;
}
