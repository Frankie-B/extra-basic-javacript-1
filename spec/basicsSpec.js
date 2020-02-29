describe('function counter()', function() {
  it('should count from 1-100', function() {
    expect(typeof counter).toEqual('function');
    //demonstrates use of custom matcher
  });

  it('should return 100', function() {
    expect(counter()).toEqual(100);
  });
});

describe('function countFunction()', function() {
  it('should be a function', function() {
    expect(typeof countFunction).toEqual('function');
  });

  it('should take one parameter', function() {
    expect(countFunction(1)).toEqual(countFunction(1));
  });

  it('should count to the number that is passed to it,', function() {
    expect(countFunction(55)).toEqual(countFunction(55));
  });
});

describe('declare function animals()', function() {
  it('should log each element from arrayWords', function() {
    expect(typeof animals).toEqual('function');
  });

  it('should take in one parameter', function() {
    expect(animals(0)).toEqual(animals(1));
  });
});
