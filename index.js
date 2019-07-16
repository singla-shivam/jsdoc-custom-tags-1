const calledBy = require('./tags/called-by')

exports.defineTags = function(dictionary) {
  dictionary.defineTag(calledBy.name, calledBy.options);
}
exports.handlers = {
  newDoclet: function(e) {
    calledBy.newDocletHandler(e)
  }
}