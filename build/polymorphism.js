"use strict";
class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        if (this.storage[key])
            throw new Error("이미 있는 키입니다");
        this.storage[key] = value;
    }
    remove(key) {
        if (this.storage[key])
            delete this.storage[key];
        else
            throw new Error("없는 키입니다");
    }
    get(key) {
        if (!this.storage[key])
            throw new Error("없는 키입니다");
        return this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
const localStorage1 = new LocalStorage();
localStorage1.set("book", "collection of written papers");
localStorage1.set("seven", 7);
console.log(localStorage1.get("book"));
console.log(localStorage1.get("seven"));
// console.log(localStorage1.get("book2"));
localStorage1.clear();
console.log(localStorage1.get("book"));
const stringStorage1 = new LocalStorage();
stringStorage1.set("coffee", "hot black caffeine");
