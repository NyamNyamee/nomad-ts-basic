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

// type이랑 비슷하지만 오브젝트에만 가능
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