var Avrgirl = require('avrgirl-arduino');

module.exports.flash = function(board, port, file, callback) {
  var avrgirl = new Avrgirl({
    board: board,
    port: port,
    debug: true
  });

  // convert the file contents to a buffer, as avrgirl is expecting
  var hex = new Buffer(file);

  // call flash method
  avrgirl.flash(hex, function(error) {
    return callback(error);
  });
}

module.exports.listPorts = function(callback) {
	Avrgirl.list(function(err, ports) {
  	return callback(err, ports);
	});
}
