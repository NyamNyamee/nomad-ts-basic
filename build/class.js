"use strict";
// 생성자 인자안에 필드 선언만 해주면 됨
// 추상클래스: new로 인스턴스는 못만들지만, 다른 클래스가 상속할 수 있음
// 접근제한자 public:전부 > protected:같은패키지, 상속받은자식 > default:같은패키지 > private:해당클래스만
class Human {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
        this.getFullname = () => {
            return this.firstName + this.lastName;
        };
    }
}
class User extends Human {
    getNickname() {
        return this.nickname;
    }
}
const user1 = new User("inwoo", "Lee", "invu");
console.log(user1);
console.log(user1.getNickname());
console.log(user1.getFullname());
const map1 = {
    food: "potato",
};
/**
 * 사전 클래스
 */
class Dict {
    constructor() {
        this.words = {};
    }
    /**
     * 저장된 모든 단어 리턴
     * @returns 모든 단어
     */
    getAllWords() {
        return this.words;
    }
    /**
     * 단어 뜻을 리턴
     * @param word 단어 이름
     * @returns 단어 뜻
     */
    getDefinition(word) {
        if (this.words[word] !== undefined) {
            return this.words[word];
        }
        return `'${word}' not found`;
    }
    /**
     * 사전에 단어를 추가
     * @param word 단어
     */
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    /**
     * 사전에 단어를 수정
     * @param word 단어
     */
    update(word) {
        if (this.words[word.term]) {
            this.words[word.term] = word.def;
        }
    }
    /**
     * 사전에 단어를 삭제
     * @param word 단어
     */
    delete(word) {
        if (this.words[word]) {
            delete this.words[word];
        }
    }
}
const dictionary1 = new Dict();
/**
 * 발음, 뜻 필드가 있는 단어 클래스
 */
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const heart = new Word("heart", "pump of blood");
// heart.term = "sss";  // 필드가 public이라도 readonly속성을 주면 수정불가
const heart2 = new Word("heart", "engine of blood");
dictionary1.add(heart);
console.log(dictionary1.getDefinition("heart"));
console.log(dictionary1.getDefinition("kimchi"));
dictionary1.delete("heart");
console.log(dictionary1.getDefinition("heart"));
dictionary1.add(heart);
dictionary1.update(heart2);
console.log(dictionary1.getAllWords());
