enum Gender{
    Male,
    Female
}
class People{
    private name:string
    private gender:WebGLRenderbuffer
    private address:string
    private email:string
    private phoneNumber:string
    constructor( name:string, gender:WebGLRenderbuffer, address:string, email:string, phoneNumber:string){
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}