module.exports = Comment

function Comment(document, nodeValue) {
  this.ownerDocument = document
  this.nodeValue = nodeValue
}

Comment.prototype = {
  nodeType: 8,

  toString: function() {
    return '<!--' + this.nodeValue + '-->'
  }
}
