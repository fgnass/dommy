module.exports = DocumentFragment

function DocumentFragment(document) {
  this.ownerDocument = document
  this.childNodes = []
}

DocumentFragment.prototype = {
  nodeType: 11,

  appendChild: function(child) {
    this.childNodes.push(child)
    child.parentNode = this
  },

  toString: function() {
    return this.childNodes.join('')
  }
}
