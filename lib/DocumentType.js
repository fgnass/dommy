module.exports = DocumentType

function DocumentType(name) {
  this.name = name || 'html'
}

DocumentType.prototype = {
  nodeType: 10,

  toString: function() {
    return '<!DOCTYPE ' + this.name + '>'
  }
}
