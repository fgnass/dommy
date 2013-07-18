var dommy = require('..')
  , assert = require('assert')

var doc = dommy()
assert.equal(doc.outerHTML, '<!DOCTYPE html>\n')

var el = doc.createElement('div')

assert.equal(el.outerHTML, '<div></div>')
assert.equal(el.ownerDocument, doc)

var a = doc.createElement('a')
a.setAttribute('href', 'foo')

assert.equal(a.outerHTML, '<a href="foo"></a>')

a.appendChild(doc.createTextNode('Hello'))

assert.equal(a.innerHTML, 'Hello')
assert.equal(a.outerHTML, '<a href="foo">Hello</a>')

el.appendChild(a)
assert.equal(el.outerHTML, '<div><a href="foo">Hello</a></div>')

el = doc.createElement('div')
el.className = 'foo'

assert.equal(el.getAttribute('class'), 'foo')
assert.equal(el.outerHTML, '<div class="foo"></div>')

assert.ok(el.classList.contains('foo'))

el.classList.add('bar')
assert.equal(el.className, 'foo bar')

el.classList.add('bar')
assert.equal(el.className, 'foo bar')

el.classList.toggle('foo')
assert.equal(el.className, 'bar')

el.className = ''
assert.equal(el.outerHTML, '<div></div>')

console.log('All tests passed.')
