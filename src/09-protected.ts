export abstract class Animal {
  constructor (protected name: string) { }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
  greet() {
      console.log(`Hello, I'm ${this.name}`);
  }

  protected doSomething(){
    console.log('doing woof2');
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


  bark(times: number): void{
      for (let index = 0; index < times; index++) {
          console.log('Woof! ${this.name}');
          // console.log('Woof! ', this.name);
      }
      this.doSomething();//can be accessed because is protected and no private
  }

  move(){
    console.log('moving as a dog');
    super.move();
  }
}

const myDog3 = new Dog('Firulais3', 'Miguel');
// myDog3.name = 'new namedd';//cant be changed due to protected
myDog3.bark(3);
myDog3.move();
console.log('myDog3.owner',myDog3.owner);
