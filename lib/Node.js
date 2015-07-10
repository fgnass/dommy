module.exports = Node

function Node(document, nodeName) {
  this.ownerDocument = document
  this.nodeName = nodeName.toUpperCase()
  this.childNodes = []
}

Node.prototype = {

  get firstChild() {
    var c = this.childNodes
    return c.length === 0 ? null : c[0]
  },

  get lastChild() {
    var c = this.childNodes
    return c.length === 0 ? null : c[c.length - 1]
  },

  get previousSibling() {
    if (!this.parentNode) return null
    var sibs = this.parentNode.childNodes
    var i = sibs.indexOf(this)
    return i === 0 ? null : sibs[i - 1]
  },

  get nextSibling() {
    if (!this.parentNode) return null
    var sibs = this.parentNode.childNodes
    var i = sibs.indexOf(this)
    return i + 1 === sibs.length ? null : sibs[i + 1]
  },

  appendChild: function(child) {
    this.childNodes.push(child)
    child.parentNode = this
  },

  removeChild: function(child) {
    var i = this.childNodes.indexOf(child)
    if (i == -1) {
      throw new Error('NOT_FOUND_ERR (8): the object can not be found here')
    }
    this.childNodes.splice(i, 1)
    child.parentNode = null
    return child
  },

  insertBefore: function(child, refChild) {
    if (!refChild) return this.appendChild(child)
    var i = this.childNodes.indexOf(refChild)
    if (i == -1) {
      throw new Error('NOT_FOUND_ERR (8): the object can not be found here')
    }
    this.childNodes.splice(i, 0, child)
    child.parentNode = this
    return child
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
