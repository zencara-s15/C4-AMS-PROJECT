export enum Gender{
    Male="male",
    Female="female"
}
export abstract class People{
    constructor( private name:string, private gender:Gender, private address:string, private email:string, private phoneNumber:string){
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    getDetails(): string {
        return `Name: ${this.name}\nGender: ${this.gender}\nAddress: ${this.address}\nEmail: ${this.email}\nPhone Number: ${this.phoneNumber}`;
    }
}