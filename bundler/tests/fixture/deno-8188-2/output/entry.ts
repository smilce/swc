const a = 1;
const a1 = a;
const a2 = a1;
const b = a2 + 1;
const b1 = b;
const a3 = a1;
const c = a3 + 2;
const a4 = a;
const b2 = b;
const c1 = c;
const a5 = a4;
const b3 = b2;
const c2 = c1;
const a6 = a1;
const b4 = b1;
const a7 = a1;
const user1 = a7 + 1;
console.log('user 1', user1);
const user11 = user1;
const user12 = user11;
const user2 = user12 + a6 + b4;
console.log('user 2', user2);
const user21 = user2;
const user22 = user21;
console.log(a5, b3, c2);
const user13 = user11;
console.log(user13, user22);