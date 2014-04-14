var bar = 2 + 'three'.concat(4);
var baz = 1+1+'three'+4;
var foo = (1+1)+'three'+4;
var qux = ''+1+1+'three'+4;
console.log(bar + ', ' + baz + ',' + foo + ', '+ qux);
var too = '' ? true : false;
console.log(too);