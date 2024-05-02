import { BookingTrip } from "../Booking/BookingTrip";

export class Customer extends People{
    private bookingTrip:BookingTrip
    constructor(name:string, gender:Gender, address:string, email:string, phoneNumber:string, bookingTrip:BookingTrip){
        super(name, gender, address, email, phoneNumber);
        this.bookingTrip = bookingTrip;
    }
}