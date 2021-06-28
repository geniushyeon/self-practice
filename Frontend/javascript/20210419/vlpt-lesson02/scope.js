const value = 'hello!';

function myFunction() {
	var value = 'bye!';

	if (true) {
		var value = 'world'; // function scope
		console.log('block scope: ');
		console.log(value);
	}
	console.log('function scope: ');
	console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);