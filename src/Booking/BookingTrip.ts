import { Airline } from "../Airport/Airline";
import { FlightType } from "../Flight/Flight";
import { Passenger } from "../Passenger/Passenger";
import { Seat } from "../Passenger/Seat";
import { Trip } from "./Trip";

export class BookingTrip {

    private bookingReferenceNumber: string;
    private passenger: Passenger;
    private airline: Airline;
    private flightType: FlightType;
    private seat: Seat;
    private price: number
    private bookingDate: Date;
    private trip: Trip;

    constructor(bookingReferenceNumber: string,passenger: Passenger,airline: Airline,) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.passenger = passenger;
        this.airline = airline;
    }

    addBookingDate (newDate: Date): void {
        this.bookingDate = newDate;
        
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