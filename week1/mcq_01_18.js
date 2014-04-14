var foo = '' + 99 + 1;
console.log("foo: " + foo + ",typeof foo: " + typeof(foo))
var bar = 0;
if (foo == 100){
	bar = 1;
}
if (foo === 100) {
	bar = 2;
}
if (foo == 991) {
	bar = 3;
}
if (foo === 991) {
	bar = 4;
}

if (typeof foo == 'string') {
	bar += 10;
}
else {
	bar -=10;
}
console.log(bar);