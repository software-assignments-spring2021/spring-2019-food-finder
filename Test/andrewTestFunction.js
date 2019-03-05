// This function tests if a number entered in is positive.

module.exports = function()
{ 
  var args = Array.prototype.slice.call(arguments);
  
  // Throw error if number entered Fis below 0
  if (args < 0)
    {
      throw new TypeError('andrewTestFunction() expects a positive number')
    }


}
