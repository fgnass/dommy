module.exports = TextNode

var escapeHTML = require('./escape')

var hasRawContent = {
  STYLE: true,
  SCRIPT: true,
  XMP: true,
  IFRAME: true,
  NOEMBED: true,
  NOFRAMES: true,
  PLAINTEXT: true,
  NOSCRIPT: true
}

function TextNode(document, nodeValue) {
  this.ownerDocument = document
  this.nodeValue = nodeValue
}

TextNode.prototype = {
  nodeType: 3,

  nodeName: '#text',

  toString: function() {
    var nodeValue = this.nodeValue
      , parentNode = this.parentNode

    if (parentNode && !hasRawContent[parentNode.nodeName]) {
      nodeValue = escapeHTML(nodeValue)
    }

    return nodeValue
  }
}
