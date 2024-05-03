import { Airline } from "../Airport/Airline";
import { Passenger } from "../Passenger/Passenger";
import { Seat } from "../Passenger/Seat";
import { Trip } from "./Trip";

export class BookingTrip {

    private bookingReferenceNumber: string;
    private passenger: Passenger;
    private airline: Airline;
    private returnTicket: boolean;
    private seat: Seat;
    private price: number
    private bookingDate: Date;
    private trip: Trip;
    static BookingTrip: BookingTrip;

    constructor(bookingReferenceNumber: string,passenger: Passenger,airline: Airline, bookingDate: Date) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.passenger = passenger;
        this.airline = airline;
        this.bookingDate = bookingDate;
    }

    getBookingDate(): Date {
        return this.bookingDate;
    }
    
    getBookingReferenceNumber(): string {
        return this.bookingReferenceNumber;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }



}