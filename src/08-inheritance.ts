export class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }

}
const myAnimal = new Animal('Rex');
myAnimal.move(10);
myAnimal.greet();
export class Dog extends Animal {

  constructor(
        name: string,
        public owner: string
    ) {
        super(name);

    }


    bark(times: number) {
        for (let index = 0; index < times; index++) {
            console.log('Woof!');
        }
    }
}
const myDog = new Dog('Firulais', 'Diego');
myDog.move(20);
myDog.greet();
myDog.bark(3);
const myDog2 = new Dog('Firulais2', 'Daniel');
myDog2.move(20);
myDog2.greet();
myDog2.bark(3);
const myDog3 = new Dog('Firulais3', 'Miguel');
myDog3.move(20);
myDog3.greet();
myDog3.bark(3);
console.log('myDog3.owner',myDog3.owner);
