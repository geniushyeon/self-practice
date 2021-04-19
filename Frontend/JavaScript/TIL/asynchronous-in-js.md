# 1. JS 비동기 처리와 콜백 함수
## 1.1. 비동기 처리란?
특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성을 의미함
### 1.1.1. 첫번째 사례: AJAX
```js
function getData() {
	let tableData;
	$.get('https://domain.com/products/1', function(response) {
		tableData = response;
	});
	return tableData;
}

console.log(getData()); // undefined
```
`$.get()`로 데이터를 요청하고 받아올 때까지 기다려주지 않고 다음 코드인 `return tableData;`를 실행했기 때문에 undefined가 반환된다.
- 이렇게 특정 로직의 실행이 끝날 때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것이 비동기 처리다.
## 1.1.2. 두번째 사례: setTimeout()
Web API의 한 종류로 코드를 바로 실행하지 않고 지정한 만큼 기다렸다가 로직을 실행한다.
```js
console.log('Hello');

setTimeout(function() {
	console.log('Bye');
}, 3000);

console.log('Hello Again');
```
1. Hello 출력
2. Hello Again 출력
3. Bye 출력
- 3초를 기다렸다가 다음 코드를 수행하는 것이 아니라, 일단 setTimeout()을 실행하고 나서 바로 다음 코드인 `console.log('Hello Again')`으로 넘어간다.
## 1.2. 콜백 함수로 비동기 처리 방식의 문제점 해결하기
```js
function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function(response) {
		callbackFunc(response);
	});
}

getData(function(tableData) {
	console.log(tableData);
});
```
이렇게 콜백 함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행시킬 수 있다.
## 1.4. 콜백 지옥
```js
$.get('url', function(response) {
	parseValue(response, function(id) {
		auth(id, function(result) {
			display(result, function(text) {
				console.log(text);
			});
		});
	});
});
```
서버에서 데이터를 받아와 화면에 표시하기까지 인코딩, 사용자 인증 등을 처리해야 하는 경우가 있는데, 만약 이 모든 괒어을 비동기로 처리해야 한다고 하면 위와 같이 콜백 안에 콜백을 계속 무는 방식으로 코딩하게 된다. 이러한 코드 구조는 가독성도 떨어지고 로직을 변경하기도 어렵다.
## 1.5. 콜백 지옥을 해결하는 방법
Promise나 Async를 사용한다.
- 코딩 패턴으로만 콜백 지옥 해결하기
```js
function parseValueDone(id) {
	auth(id, authDone);
}

function authDone(result) {
	display(result, displayDone);
}

function displayDone(text) {
	console.log(text);
}

$.get('url', function(response) {
	parseValue(response, parseValueDone);
});
```
# 2. JS Promise 쉽게 이해하기
Promise: JS 비동기 처리에 사용되는 객체
## 2.1. Promise 코드 - 기초
```js
function getData(callback) {
	return new Promise(function(resolve, reject) {
		$.get('url 주소/products/1', function(response) {
			// 데이터를 받으면 resolve() 호출
			resolve(response);
		});
	});
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
	// resolve()의 결과값이 여기로 전달됨
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```
## 2.2. Promise의 3가지 states
- Pending(대기): 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행): 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패): 비동기 처리가 실패하거나 오류가 발생한 상태
### 2.2.1. Pending(대기)
new Promise() 메서드를 호출하면 대기 상태가 된다. 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 `resolve`, `reject`이다.
```js
new Promise(); // Pending 상태
new Promise(function(resolve, reject) {
	// 코드
});
```
### 2.2.2. Fulfilled(이행)
콜백 함수의 인자 `resolve`를 아래와 같이 실행하면 이행(Fulfilled) 상태가 된다.
```js
new Promise(function(resolve, reject) {
	resolve();
});
```
이행 상태가 되면 아래와 같이 `then()`을 이용하여 처리 결과 값을 받을 수 있다.
```js
function getData() {
	return new Promise(function(resolve, reject) {
		let data = 100;
		resolve(data);
	})
}

// resolve()의 결과값 data를 resolveData로 받음
getData().then(function(resolvedData) {
	console.log(resolvedData); // 100
});
```
### 2.2.3. Rejected(실패)
콜백 함수의 인자 중 `reject`를 호출하면 실패 상태가 된다.
```js
new Promise(function(resolve, reject) {
	reject();
});
```
실패 상태가 되면 실패한 이유(실패 처리의 결과값)를 `catch()`로 받을 수 있다.
```js
function getData() {
	return new Promise(function(resolve, reject) {
		reject(new Error("Request is failed"));
	});
}

// reject()의 결과값 Error를 err에 받음
getData().then().catch(function(err) {
	console.log(err); // Error: Request is failed
});
```

## 2.3. 프로미스 코드 - 쉬운 예제
```js
function getData() {
	return new Promise(function(resolve, reject) {
		$.get('url주소/products/1', function(response) {
			if (response) {
				resolve(response);
			}
			reject(new Error("Request is failed"));
		});
	});
}

// 위 $.get() 호출 결과에 따라 'response' 혹은 'Error' 출력
getData().then(function(data) {
	console.log(data); // response 값 출력
}).catch(function(err) {
	console.error(err); // error 출력
})
```
## 2.4. 여러 개의 프로미스 연결하기
```js
new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve(1);
	}, 2000);
})
.then(function(result) {
	console.log(result);
	return result + 10; // 1
})
.then(function(result) {
	console.log(result); // 11
	return result + 20;
})
.then(function(result) {
	console.log(result); // 31
})
```
## 2.5. 프로미스의 에러 처리 방법
1. `then()`의 두 번째 인자로 처리하는 방법
```js
getData().then(
	handleSuccess,
	handleError
);
```
2. `catch()`를 이용하는 방법
```js
getData().then().catch();
```
두 가지 방법 모두 프로미스의 reject() 메서드가 호출되어 실패 상태가 된 경우 실행된다.
```js
function getData() {
	return new Promise(function(resolve, reject) {
		reject('failed');
	});
}

// 첫번째 방법
getData().then(function() {
	// 코드
}, function(err) {
	console.log(err);
});

// 두번째 방법
getData().then().catch(function(err) {
	console.log(err);
});
```
> 프로미스 에러 처리는 가급적 catch()를 사용

# 3. async와 wait
JS의 비동기 처리 패턴 중 가장 최근에 나온 문법
- 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기 좋은 코드를 작성할 수 있게 해준다.
```js
let user = fetchUser('domain.com/users/1');
if (user.id === 1) {
	console.log(user.name);
}
```
## 3.1. async & await 맛보기
```js
async function logName() {
	let user = await fetchUser('domain.com/users/1');
	if (user.id === 1) {
		console.log(user.name);
	}
}
```
## 3.2. 기본 문법
```js
async function 함수이름() {
	await 비동기처리메서드명();
}
```
> 주의: 비동기 처리 메소드가 꼭 `프로미스 객체`를 반환해야 `await`가 의도한 대로 동작한다.

## 3.3. 간단한 예제
```js


function fetchUser() {
	let url = 'https://jsonplaceholder.typicode.com/users/1';
	return fetch(url).then(function(response) {
		return response.json();
	});
}

function fetchTodo() {
	let url = 'https://jsonplaceholder.typicode.com/todos/1';
	return fetch(url).then(function(response) {
		return response.json();
	});
}

async function logTodoTitle() {
	let user = await fetchUser();
	if (user.id === 1) {
		let todo = await fetchTodo();
		console.log(todo.title);
	}
}

logTodoTitle(); // delectus aut autem
```
## 3.4. async & await 예외처리
try catch문 이용
```js
async function logTodoTitle() {
  try {
    let user = await fetchUser();
    if (user.id === 1) {
      let todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
```

# 참고
- https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/