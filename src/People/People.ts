enum Gender{
    Male,
    Female
}
class People{
    constructor( private name:string, private gender:WebGLRenderbuffer, private address:string, private email:string, private phoneNumber:string){
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}