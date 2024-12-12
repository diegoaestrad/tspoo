export class MyService{

    static instance:MyService | null = null;

    constructor(private name:string){}

    getName():string{
        return this.name;
    }

    static create(name:string){
        if(MyService.instance === null){
          console.log('entra solo 1 vez');
            MyService.instance = new MyService(name);

            // return MyService.instance;
        }
        return MyService.instance;
    }

}
const myService1 = MyService.create('service 1');
console.log('myService.getName()',myService1.getName());

const myService2 = MyService.create('service 2');
console.log('myService.getName()',myService2.getName());

console.log( myService1 === myService2)
