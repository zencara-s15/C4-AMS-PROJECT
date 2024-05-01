import { Seat } from "../Passenger/Seat";
import { Route } from "./Route";

export class Aircraft {
    private serialNumber: string;
    private numberOfSeat: string;
    private seats: Seat[];
    private flightRoutes: Route[];
    constructor( serialNumber: string,  numberOfSeat: string,seats: Seat[],flightRoutes: Route[]) {
        this.serialNumber = serialNumber;
        this.numberOfSeat = numberOfSeat;
        this.seats = seats;
        this.flightRoutes = flightRoutes;

    }
}