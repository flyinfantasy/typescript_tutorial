class CPersonInfo {
    /*name: string = 'Maxwell';
    age: number = 20;
    hasPet:boolean = false;*/

    name: string;
    age: number;
    hasPet: boolean;

    constructor(name: string = 'Maxwell', age:number = 20, hasPet: boolean = false) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }

    printInfo() {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet ${this.hasPet}
        `)
    }
}

let customInfo1 = new CPersonInfo();
console.log(customInfo1);
customInfo1.printInfo();

let maxwellInfoFormClass = new CPersonInfo('Martin',24,true);
console.log(maxwellInfoFormClass);
maxwellInfoFormClass.printInfo();