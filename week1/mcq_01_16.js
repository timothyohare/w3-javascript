var foo = 0;
for (var i = 100; i > 0; i--) {
	foo = i;
	if ((i%2) && i < 20) {
	 break;
	}
}
console.log(foo);