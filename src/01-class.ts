const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const millisecond = date.getMilliseconds();
const time = `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
export default time;
const date2 = new Date(1993,1,12);
date2.getHours();
date2.getTime();
date2.toISOString();
console.log(date2);
const date3 = new Date('1993-02-12');
class MyDate{
  year: number;
    month: number;
    day: number;
    constructor(year: number, month: number, day: number){
      this.year = year;
      this.month = month;
      this.day = day;
  }
}
const myDate = new MyDate(1993, 2, 12);
console.log(myDate);


