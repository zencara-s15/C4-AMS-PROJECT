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
    getDetails(): People{

        // let detials = ""
        // detials += `Name: ${this.name}\n`
        // detials += `Gender: ${this.gender}\n`
        // detials += `Address: ${this.address}\n`
        // detials += `Email: ${this.email}\n`
        // detials += `Phone Number: ${this.phoneNumber}\n`

        return this;

        // return "Name: ${this.name} \n Gender: ${this.gender} \n Address: ${this.address} \n Email: ${this.email} \n Phone Number: ${this.phoneNumber}`;
    }
}