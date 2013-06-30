var entities = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;'
}

var pattern = new RegExp(Object.keys(entities).join('|'), 'g')

module.exports = function(s) {
  return (''+s).replace(pattern, function(character) {
    return entities[character]
  })
}
