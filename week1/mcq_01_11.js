var foo = false;
if (foo || 0) {
	foo = true;
}
else {
	foo = Math.PI;
}
console.log(foo);