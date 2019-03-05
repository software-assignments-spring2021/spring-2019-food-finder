//This function test is the cuisine entered is written with the letter C
module.exports = function()
{
	var args =  Array.prototype.slice.call(arguments);

	//Throw error if arguments contain letters other than C
		if(!/^Cc/i.test(args))
			{
			throw new TypeError('ashwinTestFunction() expects only the letter C')}
		return args.reduce(function(a){
			return a
		}, "Chinese", "chinese", "Catalan", "Costa Rican");
}
