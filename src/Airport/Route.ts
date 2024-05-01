import { Airport } from "./Airport";

export class Route {
    private flightNumber: string;
    private departure: Airport;
    private arrival: Airport;
    private durationMinute: number
    constructor( flightNumber: string,  departure: Airport,  arrival: Airport,  durationMinute: number) {
        this.flightNumber = flightNumber;
        this.departure = departure;
        this.arrival = arrival;
        this.durationMinute = durationMinute;
        
    }
    getFlightCount(){
        
    }
}