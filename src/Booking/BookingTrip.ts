import { Airline } from "../Airport/Airline";
import { Seat } from "../Passenger/Seat";
import { Customer } from "../People/Customer";
import { Trip } from "./Trip";

export class BookingTrip {

    private bookingReferenceNumber: string;
    private customer: Customer;
    private airline: Airline;
    private returnTicket: boolean;
    private seat: Seat;
    private price: number
    private bookingDate: Date;
    private trip: Trip;
    static BookingTrip: BookingTrip;

    constructor(bookingReferenceNumber: string,customer: Customer,airline: Airline, bookingDate: Date) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.customer = customer;
        this.airline = airline;
        this.bookingDate = bookingDate;
    }

    getBookingDate(): Date {
        return this.bookingDate;
    }
    
    getBookingReferenceNumber(): string {
        return this.bookingReferenceNumber;
    }

    getCustomer(): Customer {
        return this.customer;
    }



}