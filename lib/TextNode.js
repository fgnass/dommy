module.exports = TextNode

var escapeHTML = require('./escape')

function TextNode(document, nodeValue) {
  this.ownerDocument = document
  this.nodeValue = nodeValue
}

TextNode.prototype = {
  nodeType: 3,

  toString: function() {
    var nodeValue = this.nodeValue
      , parentNode = this.parentNode

    if (parentNode && parentNode.nodeName != 'SCRIPT') {
      nodeValue = escapeHTML(nodeValue)
    }

    return nodeValue
  }
}
