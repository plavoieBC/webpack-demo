var assert = require('assert');

describe('add', function() {
  it('adds', function() {
    assert.equal(1 + 1, 2);
  });
  it('fails to add', function() {
    assert.equal(1 + 1, 4);
  })
});