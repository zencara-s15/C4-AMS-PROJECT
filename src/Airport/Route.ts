import { Airport } from "./Airport";

export class Route {
    private departure: Airport;
    private arrival: Airport;
    private durationMinute: number;

    constructor(departure: Airport, arrival: Airport, durationMinute: number) {
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
