module.exports = Document

var DocumentType = require('./DocumentType')
  , DocumentFragment = require('./DocumentFragment')
  , Element = require('./Element')
  , TextNode = require('./TextNode')
  , Comment = require('./Comment')

function Document(type) {
  this.doctype = new DocumentType(type)
  this.childNodes = []
}

Document.prototype = {
  nodeType: 9,

  appendChild: Element.prototype.appendChild,

  createElement: function(nodeName) {
    return new Element(this, nodeName)
  },

  createTextNode: function(nodeValue) {
    return new TextNode(this, nodeValue)
  },

  createComment: function(nodeValue) {
    return new Comment(this, nodeValue)
  },

  createDocumentFragment: function() {
    return new DocumentFragment(this)
  },

  toString: function() {
    return this.doctype + '\n' + this.childNodes.join('')
  },

  get outerHTML() {
    return this.toString()
  }
}
