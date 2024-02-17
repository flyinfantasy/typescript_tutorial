"use strict";
class CPersonInfo {
    constructor(name = 'Maxwell', age = 20, hasPet = false) {
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }
    printInfo() {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet ${this.hasPet}
        `);
    }
}
let customInfo1 = new CPersonInfo();
console.log(customInfo1);
customInfo1.printInfo();
let maxwellInfoFormClass = new CPersonInfo('Martin', 24, true);
console.log(maxwellInfoFormClass);
maxwellInfoFormClass.printInfo();
