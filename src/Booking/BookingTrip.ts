import { Airline } from "../Airport/Airline";
import { FlightType } from "../Flight/Flight";
import { Passenger } from "../Passenger/Passenger";
import { Seat } from "../Passenger/Seat";
import { DateTime } from "../Schedule/DateTime";
import { Trip } from "./Trip";

export class BookingTrip {

    private bookingReferenceNumber: string;
    private passenger: Passenger;
    private airline: Airline;
    private flightType: FlightType;
    private seat: Seat;
    private price: number
    private bookingDate: DateTime;
    private trip: Trip;

    constructor(bookingReferenceNumber: string,passenger: Passenger,airline: Airline,trip: Trip, dateTime: DateTime) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.passenger = passenger;
        this.airline = airline;
        this.trip = trip;
        this.bookingDate = dateTime;
    }

    getPassenger(): Passenger {
        return this.passenger;
    } 
    
    addBookingDate (newDate: DateTime): void {
        this.bookingDate = newDate;
        
    }
    getBookingDate(): DateTime {
        return this.bookingDate;
    }
    
    getBookingReferenceNumber(): string {
        return this.bookingReferenceNumber;
    }

    // getPassenger(): Passenger {
    //     return this.passenger;
    // }



}