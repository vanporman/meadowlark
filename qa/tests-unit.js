var fortune = require('C:/Users/vanporman/Documents/Datel/projects/meadowlark/lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune cookie tests', function(){

	test('getFortune() should get a fortune', function(){
		expect(typeof fortune.getFortune() === 'string');
	});
});