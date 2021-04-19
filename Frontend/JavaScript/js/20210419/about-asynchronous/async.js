function fetchItems() {
	return new Promise(function(resolve, reject) {
		let items = [1, 2, 3];
		resolve(items)
	});
}

async function logItems() {
	let resultItems = await fetchItems();
	console.log(resultItems);
}

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

logTodoTitle();