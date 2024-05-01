export class Customer extends People{
    constructor(name:string, gender:Gender, address:string, email:string, phoneNumber:string, private bookingTrip:BookingTrip){
        super(name, gender, address, email, phoneNumber);
        this.bookingTrip = bookingTrip;
    }
}