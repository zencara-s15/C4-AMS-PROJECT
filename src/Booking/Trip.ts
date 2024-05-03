
import { BookingTrip } from "./BookingTrip";

export class Trip {

    private name: string;
    private numberOfPassenger: number;
    private booking: BookingTrip[];
    // private passengers: Passenger[];

    constructor(name: string,booking: BookingTrip[] ){
        this.name = name;
        this.booking = booking;
    }

    getTripName(): string{
        return this.name;
    }

    getNumberOfPassenger(): number{
        return this.numberOfPassenger;
    }

    addBooking(booking: BookingTrip) {
        this.booking.push(booking);
    }

}