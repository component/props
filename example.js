
var props = require('./');

function test(str, opts) {
  console.log();
  console.log(str);
  console.log('=> %s', props(str, opts).join(' '));
}

test('~ret.indexOf(arr[i])')

test('name.first + name.last')

test('file.mime.split("/")')

test('file.type + " " + classes().join(" ")')

