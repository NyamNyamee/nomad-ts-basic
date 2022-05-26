// 생성자 인자안에 필드 선언만 해주면 됨
// 추상클래스: new로 인스턴스는 못만들지만, 다른 클래스가 상속할 수 있음
// 접근제한자 public:전부 > protected:같은패키지, 상속받은자식 > default:같은패키지 > private:해당클래스만
abstract class Human {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickname:string,
    ) {}

    abstract getNickname(): string

    public getFullname = () => {
        return this.firstName + this.lastName;
    }
}

class User extends Human {
    getNickname(): string {
        return this.nickname;
    }
}

const user1 = new User('inwoo', 'Lee', 'invu');

console.log(user1);
console.log(user1.getNickname());
console.log(user1.getFullname());

