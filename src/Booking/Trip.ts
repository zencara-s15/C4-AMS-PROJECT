
import { BookingTrip } from "./BookingTrip";

export class Trip {

    private name: string;
    private numberOfPassenger: number;
    private booking: BookingTrip[];
    // private passengers: Passenger[];

    constructor(name: string,numberOfPassenger: number){
        this.name = name;
        this.numberOfPassenger = numberOfPassenger;
    }

    getTripName(): string{
        return this.name;
    }

    getNumberOfPassenger(): number{
        return this.numberOfPassenger;
    }

    // addBooking(booking: BookingTrip) {
    //     this.booking.push(booking);
    // }

    getBooking(): BookingTrip[]{
        return this.booking;
    }

    getCusotmerDetails(bookingRefNumber: string): string[] {
        let passengerDetails: string[] = [];
        for (const booking of this.booking) {
            if (booking.getBookingReferenceNumber() === bookingRefNumber) {
                let passenger = booking.getPassenger();
                passengerDetails.push(passenger.getDetails());
                passengerDetails.push(`Baggage: ${passenger.getBaggages()}`);
            }
        }
        return passengerDetails;
    }

}