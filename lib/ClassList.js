module.exports = ClassList;

function ClassList(element) {
  this.element = element
}

ClassList.prototype = {

  get tokens() {
    var s = this.element.className
    return s === '' ? [] : s.split(' ')
  },

  contains: function(token) {
    return this.tokens.indexOf(token) > -1
  },

  add: function(token) {
    var list = this.tokens
    if (list.indexOf(token) > -1) return

    list.push(token)
    this.element.className = list.join(' ').trim()
  },

  remove: function(token) {
    var list = this.tokens
      , index = list.indexOf(token)

    if (index > -1) {
      list.splice(index, 1)
      this.element.className = list.join(' ').trim()
    }
  },

  toggle: function toggle(token) {
    if (this.contains(token)) {
      this.remove(token)
      return false
    }
    this.add(token)
    return true
  }
}
