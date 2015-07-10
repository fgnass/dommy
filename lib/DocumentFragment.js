module.exports = DocumentFragment

var Node = require('./Node')

function DocumentFragment(document) {
  Node.call(this, document, '#document-fragment')
}

DocumentFragment.prototype = Object.create(Node.prototype, {
  nodeType: { value: 11 }
})
