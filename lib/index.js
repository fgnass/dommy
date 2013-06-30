var Document = require('./Document')

module.exports = exports = function() {
  return new Document()
}

exports.Document = Document
exports.Attribute = require('./Attribute')
exports.ClassList = require('./ClassList')
exports.Comment = require('./Comment')
exports.DocumentFragment = require('./DocumentFragment')
exports.DocumentType = require('./DocumentType')
exports.Element = require('./Element')
exports.TextNode = require('./TextNode')
exports.escape = require('./escape')
