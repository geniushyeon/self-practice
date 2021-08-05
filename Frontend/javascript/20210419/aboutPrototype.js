function Animal(type, name, sound) {
	this.type = type;
	this.name = name;
	this.sound = sound;
}

Animal.prototype.say = function() {
	console.log(this.sound);
}

function Dog(name, sound) {
	Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
	Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('애옹이', '애옹');

dog.say();
cat.say();