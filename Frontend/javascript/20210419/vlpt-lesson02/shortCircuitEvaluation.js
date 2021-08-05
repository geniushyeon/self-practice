// 단축 평가 논리 계산법
const dog = {
	name : '멍멍이'
};

const namelessDog = {
	name : ''
}

function getName(animal) {
	const name = animal && animal.name;
	if (!name) {
		console.log('이름이 없는 동물입니다.');
	}
	return name;
}

const name = getName(namelessDog);
console.log(name);