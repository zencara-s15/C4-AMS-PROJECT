import { Airport } from "../Airport/Airport"
import { BoardingGate } from "../Airport/BoardingGate"
import { Route } from "../Airport/Route"
import { Trip } from "../Booking/Trip"
import { Passenger } from "../Passenger/Passenger"
import { FlightCrew } from "../People/FlightCrew"
import { Pilot } from "../People/Pilot"
import { FlightSchedule } from "../Schedule/FlightSchedule"

enum FlightType {
    OneWay,
    RoundTrip
}

export class Flight {

    private flightID: string;
    private flightType: FlightType;
    private flightRoutes: Route[];
    private flightSchedule: FlightSchedule[];
    private pilots: Pilot[];
    private flightCrews: FlightCrew[];
    private trip: Trip;
    private departureTrip: Airport;
    private arrivalTrip: Airport;
    private passengers: Passenger[];
    private boardingGate: BoardingGate

    constructor(flightID: string,flightType: FlightType, flightRoutes: Route[], trip: Trip, flightSchedule: FlightSchedule[],) {

        this.flightID = flightID;
        this.flightType = flightType;
        this.flightRoutes = flightRoutes;
        this.flightSchedule = flightSchedule;
        this.trip = trip;
    }

    getFlightID(): string {
        return this.flightID;
    }
    
    getFlightDetail(): string {
        let details = `Flight ID: ${this.flightID}\n`;
        details += `Flight Type: ${FlightType[this.flightType]}\n`;
        details += "Routes:\n";
        this.flightRoutes.forEach((route, index) => {
            details += `${index + 1}. ${route.getRouteDetails()}\n`;
        });
        details += "Schedule:\n";
        this.flightSchedule.forEach((schedule, index) => {
            details += `${index + 1}. ${schedule.getScheduleDetails()}\n`;
        });
        details += "Trip Details:\n";
        details += this.trip.getTripName();
        return details;
    }

    addPilot(pilot: Pilot): void {
        this.pilots.push(pilot);
    }

    addFlightCrew(flightCrew: FlightCrew): void {
        this.flightCrews.push(flightCrew);
    }

    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }

    getTrip(): Trip{
        return this.trip;
    }

    getRoute(): Route[] {
        return this.flightRoutes;
    }

    getFlightSchedule(): FlightSchedule[]{
        return this.flightSchedule;
    }

    getBoardingGate(): string {
        return this.boardingGate.getGateNumber();
    }
    
}
