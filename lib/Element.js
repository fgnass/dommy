module.exports = Element

var Attribute = require('./Attribute')
  , ClassList = require('./ClassList')
  , Node = require('./Node')

function Element(document, nodeName) {
  Node.call(this, document, nodeName)
  this.attrByName = {}
  this.attributes = []
}

Element.prototype = Object.create(Node.prototype, {

  nodeType: { value: 1 },

  setAttribute: { value: function(name, value) {
    var attr = this.attrByName[name]
    if (!attr) {
      attr = new Attribute(name)
      this.attributes.push(attr)
      this.attrByName[name] = attr
    }
    attr.value = value
  }},

  removeAttribute: { value: function(name) {
    var attr = this.attrByName[name]
    if (attr) {
      this.attrByName[name] = undefined
      this.attributes.splice(this.attributes.indexOf(attr), 1)
    }
  }},

  getAttribute: { value: function(name) {
    var attr = this.attrByName[name]
    return attr && attr.value || ''
  }},

  id: {
    get: function() {
      return this.getAttribute('id')
    },
    set: function(v) {
      this.setAttribute('id', v)
    }
  },

  className: {
    get: function() {
      return this.getAttribute('class')
    },
    set: function(v) {
      if (v) this.setAttribute('class', v)
      else this.removeAttribute('class')
    }
  },

  classList: {
    get: function() {
      if (!this._classList) this._classList = new ClassList(this)
      return this._classList
    }
  },

  outerHTML: {
    get: function() {
      var nodeName = this.nodeName.toLowerCase()
        , attributes = this.attributes.join('')
        , html = '<' + nodeName + attributes + '>'

      if (!Element.empty[nodeName]) {
        html += this.innerHTML + '</' + nodeName + '>'
      }
      return html
    }
  },

  toString: { value: function() {
    return this.outerHTML
  }}

})

Element.empty = {
  area: true,
  br: true,
  col: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  wbr: true
}
