module.exports = Comment

var escapeHTML = require('./escape')

function Comment(document, nodeValue) {
  this.ownerDocument = document
  this.nodeValue = nodeValue
}

Comment.prototype = {
  nodeType: 8,

  toString: function() {
    return '<!--' + escapeHTML(this.nodeValue) + '-->'
  }
}
