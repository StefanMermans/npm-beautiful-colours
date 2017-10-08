var colours = require("../index.js");
var styles = require("../colours/styles.js");

// Simple example run, showing of the colours.
console.log(colours.create(colours.red,"this",colours.yellow," string",colours.green," is", colours.cyan, " beautiful!"));

// The colours object can also do the printing for you
colours.printLn(colours.red, "printed straight away!");

// by default the colours object will automatically add a reset code to
// the end of colours strings. this can be disabled by setting the autoReset value to false.
colours.autoReset = false;
colours.printLn(colours.cyan,"no auto reset");
console.log("this string is still coloured!");
colours.autoReset = true;

// After not resetting it is possible to manually reset the console.
// using the resetConsole function.
// NOTE: this will output a blank line
colours.resetConsole();

// Background colours are also supported.
colours.printLn(colours.bgMagenta, "background colour!");

// Any combination is possible, even in a single string.
colours.printLn(colours.bgCyan, colours.red, "mixed ", colours.black, "colour",colours.bgWhite, " string");

// All available colours printed to console.
for(var colour in styles){
    if(styles.hasOwnProperty(colour)){
        colours.printLn(styles[colour],colour);
    }
}