function algo(x) {
	if(x===1) return true;
	var res = true;
	for(var j=2; j<=parseInt(Math.sqrt(x)); j++) {
	if (x%j===0) {
	res=false;
	break;
	}
	}
	return res;
}

console.log (algo(1));
console.log (algo(5));
console.log (algo(4));
console.log (algo(2.1));