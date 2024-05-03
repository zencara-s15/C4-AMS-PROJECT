import { Time } from "../Schedule/Time";
import { Airport } from "./Airport";

export class Route {
    private departure: Airport;
    private arrival: Airport;
    private durationMinute: Time;

    constructor(departure: Airport, arrival: Airport, durationMinute: Time) {
        this.departure = departure;
        this.arrival = arrival;
        this.durationMinute = durationMinute;
    }

    getRouteDetails(): string {
        return `Departure: ${this.departure.getAirportName} (${this.departure.getAirportCode()})\n` +
            `Arrival: ${this.arrival.getAirportName()} (${this.arrival.getAirportCode()})\n` +
            `Duration: ${this.durationMinute} minutes`;
    }
}
