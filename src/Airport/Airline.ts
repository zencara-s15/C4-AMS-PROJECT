import { Flight } from "../Flight/Flight";
import { AirlineManager } from "../People/AirlineManager";
import { Employee } from "../People/Employee";
import { Aircraft } from "./Aircraft";
import { Route } from "./Route";

export class Airline {
    private name: string;
    private aircrafts: Aircraft[] = [];
    private employees: Employee[] = [];
    private airlineManager: AirlineManager[] = [];
    private flights: Flight[] = [];
    private availableFlight: Route[] = [];
    constructor(name: string) {
        this.name = name;
    }

    addFlight(flight: Flight): void {
        this.flights.push(flight);
    }
    addAircraft(aircraft: Aircraft): void {
        this.aircrafts.push(aircraft);
    }
    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }
    addAirlineManager(airlineManager: AirlineManager): void {
        this.airlineManager.push(airlineManager);
    }
    getAvailableFlights(): Route[] {
        return this.availableFlight;
    }
}