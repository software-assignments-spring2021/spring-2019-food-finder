var vinnieValidateText = require('../vinnieTestFunction');
var expect = require('chai').expect;

describe('#vinnieTestFunction()', function(){

  context('argument contains non-numbers', function() {
      it('should throw error', function() {
        expect(function() {
          vinnieValidateText('NaN')
        }).to.throw(TypeError, 'vinnieTestFunction() expects only number inputs, no blank input, letters, or special characters.')
      })
    })

  context('argument is null', function() {
    it('should throw error', function() {
      expect(function() {
        vinnieValidateText(null)
      	}).to.throw(TypeError, 'vinnieTestFunction() expects only number inputs, no blank input, letters, or special characters.')
    })
  })

  context('argument contains special characters', function() {
    it('should throw error', function() {
      expect(function() {
        vinnieValidateText('%$#@$%^&*!!')}).to.throw(TypeError, "vinnieTestFunction() expects only number inputs, no blank input, letters, or special characters.")
    })
  })

})