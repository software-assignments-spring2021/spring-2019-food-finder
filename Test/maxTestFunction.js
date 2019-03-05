// This function tests if the cuisine entered is written with letters

module.exports = function()
{ 
  var args = Array.prototype.slice.call(arguments);
  
  // Throw error if arguments contain non-character values
	if (!/[^a-z]/i.test(args))
		{
		throw new TypeError('maxTestFunction() expects only letter inputs, no blank input, numbers, or special characters.')
		}

	return args.reduce(function(a) {
		return a
	}, "italian" , "french", "turkish", "russian");
}