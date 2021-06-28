const object = {
	a : 1,
};

function print({a, b = 3}) {
	console.log(a);
	console.log(b);
}

print(object);

const animal = {
	name : '멍멍이',
	type : '개'
};

const { name : nickname } = animal;

console.log(nickname);

const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);

const deepObject = {
	state : {
		information : {
			name : 'geniushyeon',
			languages : ['java', 'javascript', 'korean']
		}
	},
	value : 5
};

const {
	state : {
		information : {name, languages}
	},
	value
} = deepObject;

const extracted = {
	name,
	languages,
	value
}

console.log(extracted);
