describe('count to 100', function() {
  it('should create a function called counter', function() {
    expect(typeof counter).toEqual('function');
    //demonstrates use of custom matcher
  });

  it('should return 100', function() {
    expect(counter()).toEqual(100);
  });
});

describe('count to parameter', function() {
  it('should be a function name countFunction', function() {
    expect(typeof countFunction).toEqual('function');
  });

  it('should take one parameter', function() {
    expect(countFunction(1)).toEqual(countFunction(1));
  });

  it('should count to the number that is passed to it,', function() {
    expect(countFunction(55)).toEqual(countFunction(55));
  });
});

describe('display animals', function() {
  it('should log each element from arrayWords', function() {
    expect(typeof animals).toEqual('function');
  });

  it('should take in one parameter', function() {
    expect(animals(1)).toEqual(animals(1));
  });
});

describe('log words in any array', function() {
  it('should be a function named arrayLog', function() {
    expect(typeof arrayLog).toEqual('function');
  });

  it('should return an array of only strings inside any array', function() {
    expect(arrayLog(mixedArr)).toEqual([
      'The',
      'Quick',
      'Brown',
      'Fox',
      'Jumps',
      'Over',
      'The',
      'Lazy',
      'Log',
    ]);
  });
});

describe('return an array', function() {
  it('should declare a function named stringFilter', function() {
    expect(typeof stringFilter).toEqual('function');
  });

  it('should return an array', function() {
    expect(stringFilter(mixedArrTwo)).toEqual([
      'The',
      'Rain',
      'In',
      'Spain',
      'Falls',
      'Mainly',
      'On',
      'The',
      'Plain',
    ]);
  });
});

describe('declare pets', () => {
  it('should be a function', () => {
    expect(typeof pets).toEqual('function');
  });

  it('should return names', () => {
    expect(pets(myPets)).toEqual('Mittens Doge Mickey Chip Dale');
  });
});
