// function isAnimal(name) {
// 	const animals = ['고양이', '개', '거북이', '너구리'];
// 	return animals.includes(name);
// }

// const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);
// console.log(isAnimal('개')); // true
// console.log(isAnimal('노트북')); // false

function getSound(animal) {
	const sounds = {
		개: '멍멍',
		고양이: '야옹',
		참새: '짹짹',
		오리: '꽥꽥'
	};

	return sounds[animal] || '...?';
}

console.log(getSound('개'));

function makeSound(animal) {
	const tasks = {
		개() {
			console.log('멍멍');
		},
		고양이() {
			console.log('야옹');
		},
		오리() {
			console.log('꽥꽥');
		}
	};
	if (!tasks[animal]) {
		console.log('..??');
		return;
	}

	tasks[animal]();
}

makeSound('ro');