enum Skills {
    OperationAirplane,
    Hospitality,
    CustomerService
}
class Employee {
    constructor(private yearOfExperience: number, private skills: Skills, private salary: number) {
        this.yearOfExperience = yearOfExperience;
        this.skills = skills;
        this.salary = salary;
    }
}