const person = {
	firstName : 'Jihyeon',
	lastName : 'Lee',

	get fullName() { // getter
		return `${person.firstName} ${person.lastName}`;
	},
	
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

// getters => access properties
// setters => change (mutate) them

person.fullName = 'Jamie Lee';

console.log(person);