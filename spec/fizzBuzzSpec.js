describe('Javabuzz',function() {
  beforeEach(function() {
      javabuzz = new Javabuzz();
    });


  describe('when playing, says', function(){

    it('"Java" when a number is divisble by 3',function() {
      expect(javabuzz.says(3)).toEqual("Java");

    });
    
  });

  describe('knows when a number is', function(){

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true)
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true)
    });

    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByBoth(15)).toBe(true)
    });




  });
  describe('knows when a number is NOT', function(){

    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false)
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(1)).toBe(false)
    });

    it('divisible by 3 and 5', function(){
      expect(javabuzz.isDivisibleByBoth(12)).toBe(false)
      });

  });


});
