var color = 'green' + 10 + 1;
var res = 0;
switch (color) {
	case 'green10': res = 1;
	break;
	case 'green11': res = 2;
	break;
	case 'green101': res = 3;
	break;
	case 'green1': res = 4;
	break;
}
console.log(res);