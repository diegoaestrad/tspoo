export class MyDate{
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ){}

printFormat(): string {
  const day = this.addPadding(this._day);
  const month = this.addPadding(this.month);
  return `${this._day}/${this.month}/${this.year}`;
  //return `${this.day}/${this.month}/${this.year}`;
}

private addPadding(value:number){
  if(value < 10){
    return `0${value}`;
  }
    return value;
}

add(amount: number, type: 'days' | 'months' | 'years'){
  if(type === 'days'){
    this._day += amount;
  }
  if(type === 'months'){
    this.month += amount;
  }
  if(type === 'years'){
    this.year += amount;
  }
}

get day(){
  return this._day;
}

isLeapyear (): boolean{
  if(this.year % 400 === 0) return true;
  if(this.year % 100 === 0) return false;
  return this.year % 4 === 0;
}

}

const myDate = new MyDate(1993, 2, 12);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('1993', myDate.isLeapyear());
const myDate2 = new MyDate(2000, 2, 12);  console.log('2000', myDate2.isLeapyear());
const myDate3 = new MyDate(2001, 2, 12);  console.log('2001', myDate3.isLeapyear());
const myDate4 = new MyDate(2002, 2, 12);  console.log('2002', myDate4.isLeapyear());
const myDate5 = new MyDate(2003, 2, 12);  console.log('2003', myDate4.isLeapyear());
const myDate6 = new MyDate(2004, 2, 12);  console.log('2004', myDate5.isLeapyear());
const myDate7 = new MyDate(2005, 2, 12);  console.log('2005', myDate7.isLeapyear());
