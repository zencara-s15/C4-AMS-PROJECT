import { FlightCrew } from "../People/FlightCrew";
import { Pilot } from "../People/Pilot";
import { BookingTrip } from "./BookingTrip";


export class Trip {
    private departureTrip: string;
    private arrivalTrip: string;
    private pilots: Pilot[];
    private flightCrews: FlightCrew[];
    private numberOfPassenger: number;
    private booking: BookingTrip[] 
    constructor(departureTrip: string,arrivalTrip: string,pilots: Pilot[],flightCrews: FlightCrew[],numberOfPassenger: number,booking: BookingTrip[] ) {
        this.departureTrip = departureTrip;
        this.arrivalTrip = arrivalTrip;
        this.pilots = pilots;
        this.flightCrews = flightCrews;
        this.numberOfPassenger = numberOfPassenger;
        this.booking = booking;
        
    }
}