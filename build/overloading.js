"use strict";
const request = param => {
    console.log(`url = ${param}`);
};
const request2 = (param1, param2) => {
    console.log(param1, param2);
};
request("/localhost");
request2("url", { header: { url: "/localhost:8080", token: "sdadawdawdawd2" }, body: { name: "inwoo", age: 29 } });
const subs1 = (a, b, c) => {
    if (c)
        return a - b - c;
    return a - b;
};
console.log(subs1(1, 2));
console.log(subs1(1, 2, 3));
