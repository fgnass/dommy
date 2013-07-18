module.exports = Element

var Attribute = require('./Attribute')
  , ClassList = require('./ClassList')

function Element(document, nodeName) {
  this.ownerDocument = document
  this.nodeName = nodeName.toUpperCase()
  this.attrByName = {}
  this.attributes = []
  this.childNodes = []
}

Element.prototype = {
  nodeType: 1,

  appendChild: function(child) {
    if (child.nodeType == 11) {
      child.childNodes.forEach(this.appendChild, this)
    }
    else {
      this.childNodes.push(child)
      child.parentNode = this
    }
  },

  setAttribute: function(name, value) {
    var attr = this.attrByName[name]
    if (!attr) {
      attr = new Attribute(name)
      this.attributes.push(attr)
      this.attrByName[name] = attr
    }
    attr.value = value
  },

  removeAttribute: function(name) {
    var attr = this.attrByName[name]
    if (attr) {
      this.attrByName[name] = undefined
      this.attributes.splice(this.attributes.indexOf(attr), 1)
    }
  },

  getAttribute: function(name) {
    var attr = this.attrByName[name]
    return attr && attr.value || ''
  },

  get id() {
    return this.getAttribute('id')
  },

  set id(v) {
    this.setAttribute('id', v)
  },

  get className() {
    return this.getAttribute('class')
  },

  set className(v) {
    if (v) this.setAttribute('class', v)
    else this.removeAttribute('class')
  },

  get classList() {
    if (!this._classList) this._classList = new ClassList(this)
    return this._classList
  },

  toString: function() {
    var nodeName = this.nodeName.toLowerCase()
      , attributes = this.attributes.join('')
      , html = '<' + nodeName + attributes + '>'

    if (!Element.empty[nodeName]) {
      html += this.innerHTML + '</' + nodeName + '>'
    }

    return html
  },

  get innerHTML() {
    return this.childNodes.join('')
  },

  get outerHTML() {
    return this.toString()
  }
}

Element.empty = {
  area   : true,
  br     : true,
  col    : true,
  embed  : true,
  frame  : true,
  hr     : true,
  img    : true,
  input  : true,
  link   : true,
  meta   : true,
  param  : true,
  source : true,
  wbr    : true
}
