# Dommy [![Build Status](https://travis-ci.org/fgnass/dommy.png)](https://travis-ci.org/fgnass/dommy)

A Document dummy that mocks just enough of the DOM API to render HTML.

## Example

```js
var dommy = require('dommy');

var document = dommy();
var html = document.createElement('html');
var body = document.createElement('body');

html.appendChild(body);

body.appendChild(document.createTextNode('world'));
body.insertBefore(document.createTextNode('hello '), body.lastChild);

body.classList.add('foo');
document.appendChild(html);

console.log(document.outerHTML);
// <html><body class="foo">hello world</body></html>
```

### Setting innerHTML

Dommy also supports the innerHTML property. Note that dommy doesn't
include an HTML parser, hence children set via innerHTML won't be converted
into actual DOM nodes.

## The MIT License (MIT)

Copyright (c) 2013-2015 Felix Gnass

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
