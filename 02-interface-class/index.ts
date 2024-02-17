type Primitives = number | string | boolean | null | undefined;

type PrimitiveArray = Primitives[];

type OperatorFunc = (op1: Primitives, op2: Primitives) => unknown;

type PersonalInfo = {
    name: string,
    age: number,
    hasPet: boolean
};

type VehicleInfo = [string, string, string, Date];

enum WeekDayEnum {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
type WeekDayString = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
type WeekDayFormat = WeekDayEnum | WeekDayString;

//Interface
enum Gender {Male, Female, Other};

//Object
interface UserInfo {
    id:number;
    name:string;

    birth: Date;
    inerests: string[];

    gender: Gender;

    address: {
        country: string;
        city: string;
        postalCode: string;
    }

    logInfo(message:string):void;
}

interface UpdateRecord {
    (id: number, newRecord: UserInfo):void;
}

interface Person {
    name: string;
    age: number;
    hasPet: boolean;
}

/*const maxwell: Person = {
    name: 'Martin',
    hasPet: true,
}*/

function printPersonInfo(person: Person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age is: ${person.age}`);
    console.log(`Owns a pet? ${person.hasPet}`)
}

interface AddOperation {
    addition(p1:number, p2:number):number;
    addition(p1:string, P2:string):number;
}

const implementAddOperation:AddOperation = {
    addition(p1:number | string, p2:number | string) {
        if (typeof p1 === 'number' && typeof p2 === 'number'){
            return p1 + p2;
        }else if(typeof p1 === 'string' && typeof p2 === 'string'){
            return parseInt(p1,10) + parseInt(p2,10);
        }
        throw new Error(`
        
        `);
    }
}

type UseBothKeyType = {
    name:string,
    birth:Date,
    [key: string]: any,
};

interface Counter {
    (start: number): void;

    increment(): number;
    reset():void;
    value: number;
}

function createCounter(): Counter {
    let value: number;
    let initializedNumber:number;

    const counter = (function (startNumber:number){
        initializedNumber = startNumber;
        value = startNumber;
    }) as Counter;

    counter.increment = function() {
        value++;
        return value;
    };

    counter.reset = function() {
        value = initializedNumber;
    }

    Object.defineProperty(counter, 'value',{
        get() { return value; }
    })

    return counter
}

const counter:Counter = createCounter();

counter(5);

console.log(counter.value);

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);

counter.reset();

console.log(counter.value);


