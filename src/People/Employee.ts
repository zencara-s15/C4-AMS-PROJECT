enum Skills {
    OperationAirplane,
    Hospitality,
    CustomerService
}
class Employee {
    private yearOfExperience: number
    private skills: Skills
    private salary: number
    constructor(yearOfExperience: number, skills: Skills, salary: number) {
        this.yearOfExperience = yearOfExperience;
        this.skills = skills;
        this.salary = salary;
    }
}