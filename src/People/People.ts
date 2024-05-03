export enum Gender{
    Male,
    Female
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
        return `Name: ${this.name}\nGender: ${Gender[this.gender]}\nAddress: ${this.address}\nEmail: ${this.email}\nPhone Number: ${this.phoneNumber}`;
    }
}