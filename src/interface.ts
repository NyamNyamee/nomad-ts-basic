type Shape = 1 | 2 | 3;
type Color = "red" | "green" | "blue";

type Uniform = {
  shape: Shape;
  color: Color;
};

const uniform1: Uniform = {
  shape: 2,
  color: "red",
};

// type이랑 비슷하지만 오브젝트나 클래스에만 가능
interface Member {
  name: string;
  age: number;
  nickname: string;
}

// 타입과 인터페이스 간 자유롭게 상속 가능
interface Study extends Member {
  weight: number;
}

type Play = Member & {
  time: number;
};

const member1: Member = {
  name: "inwoo",
  age: 29,
  nickname: "invu",
};

const study1: Study = {
  name: "hamster",
  age: 2,
  nickname: "ham",
  weight: 6
};

const play1: Play = {
  name: "dino",
  age: 5,
  nickname: "rex",
  time: 2,
};

// 같은 이름으로 인터페이스를 여러개 만들면 속성들이 하나로 합쳐짐
interface PartOfMusic {
    sound: number
}
interface PartOfMusic {
    velocity: number
}
interface PartOfMusic {
    volume: number
}
const music1: PartOfMusic = {
  sound: 1,
  velocity: 1,
  volume: 1,
};

// 클래스에서 구현할 인터페이스
interface Animal {
  name: string;
  color: string;
  isPet: boolean;
  move(x:number, y:number): void;
  sound(): void;
}

interface Organic {
    health: number,
}

// 인터페이스를 구현하는 클래스의 필드는 public으로만 가능
class Duck implements Animal, Organic {
  constructor(
    public name: string,
    public color: string,
    public isPet: boolean,
    public health: number,
  ) {}
  move(x: number, y: number): void {
    console.log(`moved by (${x}, ${y})`);
  }
  sound(): void {
    console.log("quek quak");
  }
}  

type Beverage = {
  name: string;
  color: string;
  flavor: string;
  sparkle: boolean;
};

const beverage1: Beverage = {
  name: "coke",
  color: "darkBrown",
  flavor: "sweet",
  sparkle: true,
};

type Beverage2 = Beverage & {
  healthScore: number;
};

const beverage2: Beverage2 = {
  name: "coke",
  color: "darkBrown",
  flavor: "sweet",
  sparkle: true,
  healthScore: 2
}

interface NewBeverage {
  name: string;
  color: string;
  flavor: string;
  healthScore: number;
}

const newBeverage1: NewBeverage = {
  name: "juice",
  color: "orange",
  flavor: "orange",
  healthScore: 6
};

interface NewBeverage2 extends NewBeverage {
  forKids: boolean;
}

// type은 불가능하지만, interface는 같은 이름으로 중복해서 만들면 자동으로 프로퍼티가 합쳐짐
interface NewBeverage2 {
  luxury: boolean;
}

const newBeverage2: NewBeverage2 = {
  name: "juice",
  color: "orange",
  flavor: "orange",
  healthScore: 6,
  forKids: false,
  luxury: false,
};