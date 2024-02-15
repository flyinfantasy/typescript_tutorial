// index.ts
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

let messageToSend;
messageToSend = 'Cat is afraid of cucumbers...';
messageToSend = 10101010101100010;

let absoluteNothing:undefined = undefined;
let literallyAbsolutrNothing:null = null;
//absoluteNothing = 123;
//literallyAbsolutrNothing = "XXX";

var canBeNaullableString:string | null;
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
}

info.name = 'Martin'
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
}

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

let obj1 = { hello:'World' };
let obj2 = { ...obj1, goodbye : 'Cruel World'};

let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, {
    goodbye: 'Cruel World'
});

let justAnObject:object = { hello : 'World'};

//justAnObject.hello = 'Max';
//justAnObject.hello = null;
justAnObject = { goodbye: 'Cruel World'};
//justAnObject.nweProp = 123;
//justAnObject = 123;
justAnObject = [1, '2', 3, '4', 5, true, { hello: 'world'}];
justAnObject = new Object();
justAnObject = new String("");
justAnObject = new Number(45);

justAnObject = Object;
justAnObject = Array;

let arrayObject = [1, 2, 3, 4, 5];
let functionObject = function(){ console.log('Again!?'); };
let objectObject = new Promise((res) => res(123));
let primitiveObjct = new String('~~~~');
let classItself = Object;

//arrayObject.customProp = 123;
//functionObject.customProp = 456;
//primitiveObjct .cusrom

arrayObject.pop = function() { return 123; };
//arrayObject.pop = function() { console.log('Again!?'); };
//arrayObject.pop = function() { return 'string'; };

//let aSimpleFunction: () => void
let aSimpleFunction = function() {console.log('Hi!')};

/*const addition = function(num1,num2){
    return num1 + num2;  
};*/

/*const addition = function (param1:any, param2:any) {
    return param1 + param2;
  };

let number1 = addition('9','4');*/

let addition = function (param1:number, param2:number) {
    return param1 + param2;
}

//let shouldBeString:string = addition(123, 456);

addition = function (param1:number, param2:number):number {
    return param1 + param2;
}

//JSON.parse

const aJSONString = '{"Hello":"World", "luckyNumber": 14 }';

let parsedJSON1 = JSON.parse(aJSONString) as { hello: string, luckyNumber: number};
let parsedJSON2 = <{ hello: string, luckyNumber: number}>JSON.parse(aJSONString);
let parsedJSON3:{ hello: string, luckyNumber: number} = JSON.parse(aJSONString); 

/*addition = function (param1:string, param2:string) {
    return param1 + param2;
}*/

let doesItWork1 = function doesItWork1() {
    return undefined;
}

let doesItWork2 = function doesItWork2(): undefined {
    return undefined;
}

let doesItWork3 = function doesItWork3(): undefined {

}

let doesItWork4 = function doesItWork4(): void {
    return undefined;
}

let numbers = [1, 2, 3, 4, 5];
let strings = ['h1', 'how are you', 'good-bye']

numbers[1] = 123;
//numbers[3] = '123';

numbers.push(456);
//numbers.push('456');

numbers.concat([789, 987]);
//numbers.concat(['789','987']);
numbers = [666, 777, 888];
//numbers = ['cccc','cccc'];

let numbersAndStrings = [1, '2', 42, 666];

let objectsArray1 = [
  {message: 'Hello'},
  {message: 'Hi'},
  {message: 'Goodbye'}  
];

let objectsArray2 = [
    {message: 'Hello'},
    {message: 'Hi', revolt: true},
    {message: 'Goodbye'}  
];

let objectsArray3 = [
    {message: 'Hello'},
    {message: 1235413354341},
    {message: 'Goodbye'}  
];

let functionsArray = [
    function addition(num1: number, num2:number) {return num1 + num2},
    function subtraction(num1:number, num2:number) {return num1 - num2},
    function multiplition(num1:number, num2:number) {return num1 * num2},
    function division(num1: number, num2:number) { return num1/num2}
]

let arraysArray = [
    [1,2],
    ['Hello', 'world'],
    [true,true],
]

let miscellaneousArraysArray = [
    [1,2,3],
    ['Hello', 'world'],
    [true, false, 123, null],
    ['String', undefined]
];

let emptyArray = [];

let mappedNumbers = numbers.map(num => num * 2);

let doublednums = [];

for (let i = 0; i < numbers.length; i++) {
    const originalValue = numbers[i];
    doublednums.push(originalValue * 2);
}

numbers.push(666);
//umbers.push('666');

type Vehicle = [string, string, string, Date];

let BMWMotor :Vehicle = 
    ['BMW', 'motorcycle', 'silver', new Date(2019, 2, 17)];
let JaguarOffRoad = 
    <Vehicle>['Jaguar','off-road', 'royal-blue', new Date(2019, 1, 9)];
let ToyotaRV :[string, string, string, Date] = 
    ['Toyota','recreational', 'ivory-white', new Date(2019, 3, 15)] as Vehicle;

    