
var props = require('..');

describe('props(str, prefix)', () => {
  it('should prefix properties', () => {
    props('foo + bar', '$.')
    .should.equal('$.foo + $.bar');

    props('[foo, bar, baz].join("foo bar baz")', '$.')
    .should.equal('[$.foo, $.bar, $.baz].join("foo bar baz")');
  })

  it('should prefix methods', () => {
    props('first() + last() + classes.join()', '$.')
    .should.equal('$.first() + $.last() + $.classes.join()');
  })

  it('should ignore global constructs', () => {
    props('Math.round(n) * JSON.stringify(blob)', '$.')
    .should.equal('Math.round($.n) * JSON.stringify($.blob)');
  })
})

describe('props(str, fn)', () => {
  it('should map properties', () => {
    props('foo + bar', _ => '$.' + _)
    .should.equal('$.foo + $.bar');

    props('[foo, bar, baz].join("foo bar baz")', _ => '$.' + _)
    .should.equal('[$.foo, $.bar, $.baz].join("foo bar baz")');
  })

  it('should map methods', () => {
    props('first() + last() + classes.join()', _ => '$.' + _)
    .should.equal('$.first() + $.last() + $.classes.join()');
  })
})
