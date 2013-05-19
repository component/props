
var props = require('..');

describe('props(str, prefix)', function(){
  it('should prefix properties', function(){
    props('foo + bar', '$.')
    .should.equal('$.foo + $.bar');

    props('[foo, bar, baz].join("foo bar baz")', '$.')
    .should.equal('[$.foo, $.bar, $.baz].join("foo bar baz")');
  })

  it('should prefix methods', function(){
    props('first() + last() + classes.join()', '$.')
    .should.equal('$.first() + $.last() + $.classes.join()');
  })
})
