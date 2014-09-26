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

  set innerHTML(s) {
    this.childNodes = []
    this._innerHTML = s
  },

  get innerHTML() {
    return this._innerHTML || this.childNodes.join('')
  },

  toString: function() {
    return this.innerHTML
  }
}
