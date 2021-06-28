const kitty = {
	name : '고양이',
	sound : '야옹',
	age : 4
}

console.log(Object.entries(kitty));
console.log(Object.keys(kitty));
console.log(Object.values(kitty));

for (let key in kitty) {
	console.log(key);
}