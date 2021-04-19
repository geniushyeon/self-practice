const chunbae = {
	name : '춘배'
};

const cuteChunbae = {
	...chunbae,
	attribute : 'cute'
};

const whiteCuteChunbae = {
	...cuteChunbae,
	color : 'white'
};

console.log(chunbae);
console.log(cuteChunbae);
console.log(whiteCuteChunbae);

// const { color, ...rest } = whiteCuteChunbae;
// console.log(color);
// console.log(rest);

// const numbers = [0, 1, 2, 3, 4, 5, 6];

// const [one, ...rest] = numbers;

// console.log(one);
// // console.log(rest);

// function sum(...rest) {
// 	return rest.reduce((acc, current) => acc + current, 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6,];
// const result = sum(...numbers);
// console.log(result);

function max(...numbers) {
  return numbers.reduce(
		(acc, current) => (current > acc ? current : acc),
		numbers[0]
	);
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
