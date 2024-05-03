import { Seat } from "../Passenger/Seat";
import { Route } from "./Route";

export class Aircraft {
    private serialNumber: string;
    private numberOfSeat: number;
    private seats: Seat[];
    private flightRoutes: Route[];
    constructor( serialNumber: string,  numberOfSeat: number,) {
        this.serialNumber = serialNumber;
        this.numberOfSeat = numberOfSeat;
    }
}