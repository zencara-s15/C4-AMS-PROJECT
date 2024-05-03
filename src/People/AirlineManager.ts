import { Employee, Skills } from "./Employee";
import { Gender } from "./People";

export class AirlineManager extends Employee {
    
    private managedEmployees: Employee[];

    constructor(name: string, gender: Gender, address: string, email: string, phoneNumber: string, yearOfExperience: number, skills: Skills, salary: number) {
        super(name, gender, address, email, phoneNumber, yearOfExperience, skills, salary);
        this.managedEmployees = [];
    }
    
    addManagedEmployee(...employees: Employee[]): void {
        this.managedEmployees.push(...employees);
    }    

    getEmployeeAllSalary(): number {
        let totalSalary = 0;
        for (const employee of this.managedEmployees) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }
    
}
