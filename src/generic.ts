type SuperPrint = {
  <T>(param1: T[]): void;
};

const generic1: SuperPrint = (param1) => {
  param1.forEach((v) => {
    console.log(v);
  });
};

generic1([1, 2, 3, 4]);
generic1(["2", "3", true, 1]);

const superPrint = <T, M>(a: T[], b: M): void => {
  console.log(a[0], b);
};

superPrint([1, "a", 2, "b"], 5);

type ArrTest<T> = T[];
const arrTest1: ArrTest<number> = [1,2,3,4,5];

type Player<E> = {
  name: string,
  extraInfo: E
};

const player1: Player<{age:number, height:number}> = {
    name: "inwoo",
    extraInfo: {
        age : 22,
        height: 181
    }
}

const player2: Player<{power:number, age:number}> = {
    name: "hamster",
    extraInfo: {
        power: 99,
        age: 5
    }
}

console.log(player1);
console.log(player2);

// type NumberArray = number[];
// type NumberArray2 = Array<number>;
// const arr1: NumberArray = [1,2,3,4];
// const arr2: NumberArray2 = [1,2,3,4];

// const sumSubs = <T, E> (a: T[], b:E) : T|E => {
//     return a[0];
// }

// console.log(typeof sumSubs(["1", 2, "3"], 4));

// type Test= {
//      <T, E> (a: T[], b: E) : T|E
// }

// const sum1: Test = (a, b) => a[0];

// console.log(sum1([1, "2"], 3));
