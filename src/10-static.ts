console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));
console.log(Math.max(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.1));
console.log(Math.round(1.1));


class MyMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item, numbers[0]);
  }

}


console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('MyMath.max', MyMath.max(-1, -2, -3, -4, -5, -6, -7, -8, -9, -10));
const arr2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
console.log('MyMath.max', MyMath.max(...arr2));
console.log('MyMath.max', MyMath.max(1, 2, 3, 4, 5, 6, 7, 9878, 9, 10, ...arr2));
console.log('MyMath.max', MyMath.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...arr2, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));
