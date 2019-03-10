// This function tests if a number entered in is actually a number

module.exports = function()
{ 
  var args = Array.prototype.slice.call(arguments);
  
  // Throw error if arguments contain non-number values
  if (!args.every(Number.isFinite))
    {
      throw new TypeError('vinnieTestFunction() expects only number inputs, no blank input, letters, or special characters.')
    }

}