"use strict";
const uniform1 = {
    shape: 2,
    color: "red",
};
const member1 = {
    name: "inwoo",
    age: 29,
    nickname: "invu",
};
const study1 = {
    name: "hamster",
    age: 2,
    nickname: "ham",
    weight: 6
};
const play1 = {
    name: "dino",
    age: 5,
    nickname: "rex",
    time: 2,
};
const music1 = {
    sound: 1,
    velocity: 1,
    volume: 1,
};
// 인터페이스를 구현하는 클래스의 필드는 public으로만 가능
class Duck {
    constructor(name, color, isPet, health) {
        this.name = name;
        this.color = color;
        this.isPet = isPet;
        this.health = health;
    }
    move(x, y) {
        console.log(`moved by (${x}, ${y})`);
    }
    sound() {
        console.log("quek quak");
    }
}
const beverage1 = {
    name: "coke",
    color: "darkBrown",
    flavor: "sweet",
    sparkle: true,
};
const beverage2 = {
    name: "coke",
    color: "darkBrown",
    flavor: "sweet",
    sparkle: true,
    healthScore: 2
};
const newBeverage1 = {
    name: "juice",
    color: "orange",
    flavor: "orange",
    healthScore: 6
};
const newBeverage2 = {
    name: "juice",
    color: "orange",
    flavor: "orange",
    healthScore: 6,
    forKids: false,
    luxury: false,
};
