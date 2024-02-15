"use strict";
// index.ts
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;
let messageToSend;
messageToSend = 'Cat is afraid of cucumbers...';
messageToSend = 10101010101100010;
let absoluteNothing = undefined;
let literallyAbsolutrNothing = null;
//absoluteNothing = 123;
//literallyAbsolutrNothing = "XXX";
var canBeNaullableString;
//let  myString = canBeNaullableString;
canBeNaullableString = 'hello';
//canBeNaullableString = undefined;
canBeNaullableString = null;
let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};
let someone = {
    knows: undefined,
    identity: null
};
info.name = 'Martin';
info.age = 24;
info.hasPet = true;
someone.knows = undefined;
someone.identity = null;
//info.name = false;
//info.age = null;
info = {
    name: 'Martin',
    age: 24,
    hasPet: true
};
/*info = {
    name: 'Martin',
    age: 24,
}*/
//info.job = 'Engineer';
/*delete info.age;
console.log(info);

info.age = undefined;*/
let nestedObject = {
    prop: 'Hello',
    child: {
        prop1: 123,
        prop2: false,
    }
};
let obj1 = { hello: 'World' };
let obj2 = Object.assign(Object.assign({}, obj1), { goodbye: 'Cruel World' });
let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, {
    goodbye: 'Cruel World'
});
let justAnObject = { hello: 'World' };
//justAnObject.hello = 'Max';
//justAnObject.hello = null;
justAnObject = { goodbye: 'Cruel World' };
//justAnObject.nweProp = 123;
//justAnObject = 123;
justAnObject = [1, '2', 3, '4', 5, true, { hello: 'world' }];
justAnObject = new Object();
justAnObject = new String("");
justAnObject = new Number(45);
justAnObject = Object;
justAnObject = Array;
let arrayObject = [1, 2, 3, 4, 5];
let functionObject = function () { console.log('Again!?'); };
let objectObject = new Promise((res) => res(123));
let primitiveObjct = new String('~~~~');
let classItself = Object;
//arrayObject.customProp = 123;
//functionObject.customProp = 456;
//primitiveObjct .cusrom
arrayObject.pop = function () { return 123; };
arrayObject.pop = function () { console.log('Again!?'); };
arrayObject.pop = function () { return 'string'; };
