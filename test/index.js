var dommy = require('..')
  , test = require('tap').test


test('document', function(t) {
  var doc = dommy()
  t.equal(doc.outerHTML, '<!DOCTYPE html>\n')
  t.end()
})

test('element', function(t) {
  var doc = dommy()
  var el = doc.createElement('div')

  t.equal(el.outerHTML, '<div></div>', 'div is empty')
  t.equal(el.ownerDocument, doc, 'ownerDocument is set')

  el.appendChild(doc.createTextNode('Hello <3'))
  t.equal(el.innerHTML, 'Hello &lt;3', 'innerHTML is escaped')

  t.end()
})

test('raw content', function(t) {
  var doc = dommy()
  var el = doc.createElement('script')

  el.appendChild(doc.createTextNode('var a = "1" < 3'))
  t.equal(el.outerHTML, '<script>var a = "1" < 3</script>', 'content is unescaped')

  t.end()
})

test('attributes', function(t) {
  var doc = dommy()
  var a = doc.createElement('a')
  a.setAttribute('href', 'foo')
  t.equal(a.outerHTML, '<a href="foo"></a>', 'attribute is serialized')
  t.end()
})

test('classes', function(t) {
  var doc = dommy()
  var el = doc.createElement('div')
  el.className = 'foo'

  t.equal(el.getAttribute('class'), 'foo', 'class attribute reflects className')

  t.equal(el.outerHTML, '<div class="foo"></div>', 'class attribute is serialized')

  t.ok(el.classList.contains('foo'), 'classList reflects class set via class attribute')

  el.classList.add('bar')
  t.equal(el.className, 'foo bar', 'added class')

  el.classList.add('bar')
  t.equal(el.className, 'foo bar', 'not added twice')

  el.classList.toggle('foo')
  t.equal(el.className, 'bar', 'remove class through toggle')

  el.className = ''
  t.equal(el.outerHTML, '<div></div>', 'empty className removes class attribute')
  t.end()
})

test('innerHTML', function(t) {
  var doc = dommy()
  var el = doc.createElement('div')
  el.appendChild(doc.createTextNode('foo'))
  t.equal(el.outerHTML, '<div>foo</div>', 'serialized html contains childNodes')
  el.innerHTML = ''
  t.equal(el.outerHTML, '<div></div>', 'clearing innerHTML removes all children')

  el.innerHTML = '<h1>hello</h1>'
  t.equal(el.outerHTML, '<div><h1>hello</h1></div>', 'serialized html reflects innerHTML')
  t.end()
})

test('fragments', function(t) {
  var doc = dommy()
  var f = doc.createDocumentFragment()
  f.appendChild(doc.createTextNode('foo'))
  t.equal(f.innerHTML, 'foo')

  f.innerHTML = '<h1>hello</h1>'
  t.equal(f.toString(), '<h1>hello</h1>')

  var el = doc.createElement('div')
  el.appendChild(f)

  t.equal(el.outerHTML, '<div><h1>hello</h1></div>')
  t.end()
})

test('mutation', function(t) {
  var doc = dommy()
  var ul = doc.createElement('ul')
  var li1 = doc.createElement('li')
  var li2 = doc.createElement('li')
  var li3 = doc.createElement('li')

  li1.innerHTML = '1'
  li2.innerHTML = '2'
  li3.innerHTML = '3'

  ul.insertBefore(li3, null)
  ul.insertBefore(li2, ul.lastChild)
  ul.insertBefore(li1, li2)

  t.equal(li1.parentNode, ul, 'insertBefore sets parentNode')
  t.equal(ul.innerHTML, '<li>1</li><li>2</li><li>3</li>', 'insertBefore')

  ul.removeChild(li1.nextSibling)
  t.equal(ul.innerHTML, '<li>1</li><li>3</li>', 'removeChild')

  t.end()
})
