
import { Baggage } from "../Passenger/Baggage";
import { Passenger } from "../Passenger/Passenger";
import { People } from "../People/People";
import { BookingTrip } from "./BookingTrip";

export class Trip {
    
    private name: string;
    private numberOfPassenger: number;
    private bookings: BookingTrip[] = []; 
    private date: Date[];
    private passengers: Passenger[];

    constructor(name: string,numberOfPassenger: number,){
        this.name = name;
        this.numberOfPassenger = numberOfPassenger;
    }

    getCusotmerDetails(bookingRefNumber: string): People[] {
        let passengerDetails: People[] = [];
        for (let booking of this.bookings) {
            if (booking.getBookingReferenceNumber() === bookingRefNumber) {
                let passenger = booking.getPassenger();
                passengerDetails.push(passenger.getDetails());
            }
        }
        return passengerDetails;
    }

    getTripName(): string{
        return this.name;
    }

    addDate(newDate: Date[]): void {
        this.date = newDate;
    }
    
    getDate(): Date []{
        return this.date;
    }

    getNumberOfPassenger(): number{
        return this.numberOfPassenger;
    }

    addBooking(booking: BookingTrip) {
        this.bookings.push(booking);
    }

    getBooking(): BookingTrip[]{
        return this.bookings;
    }

}