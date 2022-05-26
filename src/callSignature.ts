const add1 = (a:number, b:number) => a + b;
console.log(add1(1, 2));

type Add = (a:number, b:number) => number;  // 함수 call signature 정의
const add2 : Add = (b, c) => b + c;
console.log(add2(2, 3));