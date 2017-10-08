var styles = require('./styles');
var repo = require('./repository');

/**
 * Expose the colours object
 * which will serve as the main API
 * for the users.
 */
var colours = Object.setPrototypeOf({}, styles); // Inherit the colour codes from the the styles object.
module.exports = colours;

/**
 * if this is true, the create function will
 * automatically add a reset element to the end of the 
 * string, and if it is false it won't.
 */
colours.autoReset = true;

/**
 * @description
 * Concatenate a list of arguments into a single string.
 * @param {arguments} any any and all arguments which will be
 * concatenated into a single string.
 * @return {string} The string containing every object. 
 */
colours.create = function(){
    // Set all the arguments
    return repo.createPrettyString(arguments, colours.autoReset);
};

/**
 * @description
 * Concatenate a list of arguments into a single string, and immediately
 * print it to the console using "console.log".
 * @param {arguments} amy any and all arguments which
 * will be concatenated into a single string and printed.
 * @return {string} The string containing every object.
 */
colours.printLn = function(){
    var prettyString = repo.createPrettyString(arguments, colours.autoReset);
    console.log(prettyString);
    return prettyString;
};

/**
 * @description
 * Reset the console by printing the reset escape
 * code to the console using "console.log".
 */
colours.resetConsole = function(){
    console.log(colours.reset);
};