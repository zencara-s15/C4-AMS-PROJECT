import { Employee, Skills } from "./Employee";
import { Gender } from "./People";

export class Pilot extends Employee {
    constructor(name: string,gender: Gender,address: string,email: string,phoneNumber: string,yearOfExperience: number,skills: Skills,salary: number) {
        super(name, gender, address, email, phoneNumber, yearOfExperience, skills, salary);
    }
}
