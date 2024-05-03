import { Gender, People } from "./People";

export enum Skills {
    OperationAirplane,
    Hospitality,
    CustomerService
}

export abstract class Employee extends People {
    constructor( name: string, gender: Gender, address: string, email: string, phoneNumber: string, private yearOfExperience: number, private skills: Skills, private salary: number) {
        super(name, gender, address, email, phoneNumber);
        this.yearOfExperience = yearOfExperience;
        this.skills = skills;
        this.salary = salary;
    }
    getYearOfExperience(): number {
        return this.yearOfExperience;
    }
    getSkills(): Skills {
        return this.skills;
    }
    getSalary(): number {
        return this.salary;
    }
}
