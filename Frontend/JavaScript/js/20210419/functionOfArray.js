const people = ['제이미', '치콜', '프로닝', '코코', '톰'];

people.forEach(person => {
	console.log(person);
})

console.log(people.indexOf('제이미'));

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const square = n => n * n;
// const squared = array.map(square);
// console.log(squared);

const todos = [
	{
		id : 1,
		text : '리액트',
		done : false
	},
	{
		id : 2,
		text : '스프링',
		done : true
	},
	{
		id : 3,
		text : '알고리즘',
		done : false
	}

];

// const index = todos.findIndex(todo => todo.id === 3);
const todo = todos.find(todo => todo.id === 3);
const tasksNotDone = todos.filter(todo => todo.done === false);

console.log(tasksNotDone);

// const numbers = [10, 20, 30, 40];
// const value = numbers.pop();
// console.log(value);
// console.log(numbers);

const numbers = [1, 2, 3, 4, 5];
// let sum = array.reduce((accumulator, current) => {
// 	console.log({ accumulator, current });
// 	return accumulator + current;
// }, 0);

// console.log(sum);

// 평균 구하기
let sum = numbers.reduce((accumulator, current, index, array) => {
	if (index === array.length -1) {
		return (accumulator + current) / array.length;
	}
	return accumulator + current;
});

console.log(sum);

function countBiggerThanTen(numbers) {
	return numbers.reduce((acc, current) => {
		if (current > 10) {
			return acc + 1;
		} else {
			return acc;
		}
	}, 0);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
