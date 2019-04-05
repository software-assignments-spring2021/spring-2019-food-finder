var ashwinValidateText = require('../ashwinTestFunction');
var expect = require('chai').expect;

describe('#ashwinTestFunction()', function(){

	context('argument contains letters other then C', function() {
		it('should throw error', function() {
			expect(function() {
				ashwinValidateText('Arabian')
			}).to.throw(TypeError, 'ashwinTestFunction() expects only the letters C or c.')
		})
	})

	context('argument contains numbers', function() {
		it('should throw error', function() { 
			expect(function() {
				ashwinValidateText('214509105')
			}).to.throw(TypeError, 'ashwinTestFunction() expects only the letters C or c.')
		})
	})

	context('argument contains special characters', function() {
		it('should throw error', function() { 
			expect(function() {
				ashwinValidateText('*&^%$#$%^')
			}).to.throw(TypeError, 'ashwinTestFunction() expects only the letters C or c.')
		})
	})

})
