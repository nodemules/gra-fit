{
  /* global Enum */
  function permissionsEnum() {
    var permissions = {
      'TEST_PERMISSION': 1
    }

    return new Enum(permissions);
  }

  module.exports = permissionsEnum();
}
