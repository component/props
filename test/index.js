
var props = require('..');
var fs = require('fs');
var path = require('path');

fs.readdirSync('test/cases').forEach(file => {
  if (~file.indexOf('.out')) return;
  var base = path.basename(file, '.js');
  describe(base, () => {
    it('should work', () => {
      var js = fs.readFileSync('test/cases/' + file, 'utf8');
      var out = fs.readFileSync('test/cases/' + base + '.out', 'utf8').trim().split(/\s+/);
      props(js).should.eql(out);
    })
  })
});
