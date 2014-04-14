var sum = function doSum(a,b) {
	var c = a+ b;
	return c;
};
function doSum2(a,b) {
	var c = a+ b;
	return c;
}

console.log(sum(1,1));
console.log(doSum2(2,2));
console.log(doSum2(2,2));

var sum2 = function () {
	var res  = 0;
	for (var i = 0; i < arguments.length; i++) {
		res += arguments[i];
	}
	return res;
}

console.log(sum2(1,2,3));
console.log(sum2());
console.log(sum2(1,1,1,1,1,1,1,1));
console.log(sum2(1,2,3,'ninja'));


