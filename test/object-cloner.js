var test = require('tape');
var tapSpec = require('tap-spec');
var objectCloner = require('../src/index.js');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('shallow clone', function (t) {
  var objectToCopy = {a:1, b:2};
  var cloner = objectCloner.for(objectToCopy);
  var copy = cloner(objectToCopy);

  t.plan(2);

  t.deepEqual(
    copy,
    objectToCopy,
    'objects should be identical'
  );

  t.notEqual(
    copy,
    objectToCopy,
    'copy and original should not be the same object'
  );
});
