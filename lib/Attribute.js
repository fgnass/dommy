module.exports = Attribute

var escapeHTML = require('./escape')

function Attribute(name, value) {
  this.name = name
  this.value = value
}

Attribute.prototype = {
  nodeType: 2,

  toString: function() {
    if (typeof this.value == 'boolean') {
      return this.value ? ' ' + this.name : ''
    }
    return ' ' + this.name + '="' + escapeHTML(this.value) + '"'
  }
}
