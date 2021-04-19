const ironMan = {
	name : '토니 스타크',
	actor : '로버트 다우니 주니어',
	alias : '아이언맨'
};

const captainAmerica = {
	name : '스티븐 로저스',
	actor : '크리스 에반스',
	alias : '캡틴 아메리카'
};

function print({alias, name, actor}) {
	const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`;
	console.log(text); 
}

print(ironMan);
print(captainAmerica);

// 객체 안에 함수 넣기
const cat = {
	name : '고양이',
	sound : '애옹',
	say : function say() {
		console.log(this.sound);
	}
};

cat.say();