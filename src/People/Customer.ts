import { BookingTrip } from "../Booking/BookingTrip";
import { Baggage } from "../Passenger/Baggage";
import { Gender, People } from "./People";

export class Customer extends People {
    private baggages: Baggage;
    constructor( name: string, gender: Gender, address: string, email: string, phoneNumber: string, private bookingTrip: BookingTrip) {
        super(name, gender, address, email, phoneNumber);
        this.bookingTrip = bookingTrip;
    }

    getBookingTrip(): BookingTrip {
        return this.bookingTrip;
    }
    getBaggages(): Baggage {
        return this.baggages;
    }
}
