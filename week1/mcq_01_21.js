var x = true;
var y = x || 0;
console.log(y);

var x = false;
var y = x || 0;
console.log(y);

var y = (typeof x === 'undefined' ? 0 : x);
console.log("y: " + y)