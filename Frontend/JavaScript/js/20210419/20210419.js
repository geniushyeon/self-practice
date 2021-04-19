const numbers = {
	_a : 1,
	_b : 2,
	sum : 3,

	calculate() {
		console.log('calculate');
		this.sum = this._a + this._b;
	},

	get a() {
		return this._a;
	},

	get b() {
		return this._b;
	},

	set a(value) { // setter
		console.log('a가 바뀝니다.');
		this._a = value;
		this.calculate();
	},

	set b(value) {
		console.log('b가 바뀝니다.');
		this._b = value;
		this.calculate();
	}
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;

console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);


function sumOf(numbers) {
	let sum = 0;
	for (let i of numbers) {
		sum += i;
	}
	return sum;
}

const array = [1, 2, 3, 4, 5];
console.log(sumOf(array));

function biggerThanThree(numbers) {
	const newArray = [];
	for (let i of numbers) {
		if (i > 3) {
			newArray.push(i);
		}
	}

	return newArray;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers2));

function print(person) {
	if (person === undefined || person === null) {
		console.log('person이 없네요');
		return;
	}
	console.log(person.name);
}

const person = null;
print(person);

const num = parseInt('15', 10); // 10진수 15를 숫자로 변환할래
console.log(num);
const notnum = parseInt('야호', 10);
console.log(notnum);