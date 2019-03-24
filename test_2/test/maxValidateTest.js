var maxValidateText = require('../maxTestFunction');
var expect = require('chai').expect;

describe('#maxTestFunction()', function(){

  context('argument contains numbers', function() {
      it('should throw error', function() {
        expect(function() {
          maxValidateText('0123456789')
        }).to.throw(TypeError, 'maxTestFunction() expects only letter inputs, no blank input, numbers, or special characters.')
      })
    })

  context('argument is null', function() {
    it('should throw error', function() {
      expect(function() {
        maxValidateText(null)
      	}).to.throw(TypeError, 'maxTestFunction() expects only letter inputs, no blank input, numbers, or special characters.')
    })
  })

  context('argument contains special characters', function() {
    it('should throw error', function() {
      expect(function() {
        maxValidateText('%$#@$%^&*!')}).to.throw(TypeError, "maxTestFunction() expects only letter inputs, no blank input, numbers, or special characters.")
    })
  })
  

})