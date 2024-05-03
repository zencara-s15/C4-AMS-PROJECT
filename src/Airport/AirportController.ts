import { BookingTrip } from "../Booking/BookingTrip";
import { Airport } from "./Airport";

class AirportController {
    private airport: Airport;
    private booking: BookingTrip[];

    constructor(airport: Airport) {
        this.airport = airport;
    }
    getCusotmerDetails(bookingRefNumber: string): string[] {
        
    }
}

