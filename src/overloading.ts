type TypeHeader = {
    url: string,
    token: string
}

type TypeBody = {
    name: string,
    age: number
}

type Config = {
    header: TypeHeader,
    body: TypeBody
}

type RequestMethod = { // 함수 call signature 다수 정의 (오버로딩)
    (param1: string, param2?: Config): void
}  

const request: RequestMethod = param => {
    console.log(`url = ${param}`);
}

const request2: RequestMethod = (param1, param2) => {
    console.log(param1, param2);
}

request("/localhost");
request2("url", {header:{url:"/localhost:8080", token:"sdadawdawdawd2"}, body:{name:"inwoo", age:29}});

type Substraction = {
    (a: number, b: number): number,
    (a: number, b: number, c: number): number,
}

const subs1:Substraction = (a, b, c?:number) => {
    if(c) return a-b-c;
    return a - b;
}

console.log(subs1(1, 2));
console.log(subs1(1, 2, 3));