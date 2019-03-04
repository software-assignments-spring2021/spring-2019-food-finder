
var validateText = require('../validateText');
var expect = require('chai').expect;

describe('#validateText()', function() {

  context('without arguments', function() {
    it('should throw error', function() {
      expect(function() {
	  validateText(null)}).to.throw(TypeError, 'validateText() expects only number input in range 10001 - 11104, no blank input, letters, or special characters.')
    })
  })
  
  context('argument is a number above 10000', function() {
    it('should return the argument', function() {
      expect(validateText(10001)).to.be.above(10000)
    })
  })
  
    context('argument is a number below 10001', function() {
    it('should throw error', function() {
      expect(function() {
	  validateText(1000)}).to.throw(TypeError, 'validateText() expects only number input in range 10001 - 11104, no blank input, letters, or special characters.')
    })
  })
  
  context('argument is a number above 11105', function() {
    it('should throw error', function() {
      expect(function() {
	  validateText(11105)}).to.throw(TypeError, 'validateText() expects only number input in range 10001 - 11104, no blank input, letters, or special characters.')
    })
  })
  
  context('argument is a number below 11105', function() {
    it('should return the argument', function() {
      expect(validateText(10001)).to.be.below(11105)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        validateText('Hello')
      }).to.throw(TypeError, 'validateText() expects only number input in range 10001 - 11104, no blank input, letters, or special characters.')
    })
  })

  context('argument contains special characters', function() {
    it('should throw error', function() {
      expect(function() {
        validateText('%$#@$%^&*!!')}).to.throw(TypeError, "validateText() expects only number input in range 10001 - 11104, no blank input, letters, or special characters.")
    })
  })

  context('argument is null', function() {
    it('should throw error', function() {
      expect(function() {
        validateText(null)
      }).to.throw(TypeError, "validateText() expects only number input in range 10001 - 11104, no blank input, letters, or special characters.") 
    })
  })

})