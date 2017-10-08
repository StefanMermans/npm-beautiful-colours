var styles = require('./styles'); // styles is used to add the reset string

/**
 * Expose the repository object.
 * which contains functionality
 * used by the app, but is inaccessible
 * to the user.  
 */
var repo = {};
module.exports = repo;

/**
 * @description
 * Concatenate a list of objects into a single string.
 * @param {array} list the list of objects which
 * will be concatenated into a single string
 * @param {boolean} rest if true, a reset ANSI escape code
 * will be added to the end of the string.
 * @return {string} the concatenated string.
 */
repo.createPrettyString = function(list, reset){
    var beautifulString = "";
    for(var i = 0; i < list.length; i++){
        beautifulString += list[i];
    }
    if(reset){
        beautifulString += styles.reset;
    }

    return beautifulString;
}