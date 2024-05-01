import { Seat } from "../Passenger/Seat";


export class BookingTrip {
    private  bookingReferenceNumber: string;
    private returnTicket: boolean;
    private seat: Seat;
    private price: number
    constructor(bookingReferenceNumber: string,returnTicket: boolean,seat: Seat,price: number) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.returnTicket = returnTicket;
        this.seat = seat;
        this.price = price;
        
    }
}