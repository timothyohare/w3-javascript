#!/usr/bin/env node
var result,
 question,
 args = getArgs(),
 a = args[0],
 b = args[1];

// The question is: "Is <the value of variable a> strictly greater than <the value of variable b>?"
question = // ...;
// The answer is: yes or no
result = // ...;

function getArgs() {
	var tmp = process.argv.slice(2).map(function(v) { return +v; });
	if (tmp.length < 2) {
		process.stdout.write('Error missing arguments (usage: ./ode.gt.js value1 value2');
		process.exit(1);
	}
	return tmp;
}

(function answer() {
	process.stdout.write('<' + question + '>' + result + '>\n');
} ()); 