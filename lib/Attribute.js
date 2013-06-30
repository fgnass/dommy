module.exports = Attribute

var escapeHTML = require('./escape')

function Attribute(name, value) {
  this.name = name
  this.value = value
}

Attribute.prototype = {
  nodeType: 2,

  toString: function() {
    return ' ' + this.name + '="' + escapeHTML(this.value) + '"'
  }
}
