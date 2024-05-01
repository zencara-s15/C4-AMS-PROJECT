import { Flight } from "../Flight/Flight";
import { Aircraft } from "./Aircraft";
import { Route } from "./Route";

export class Airline {
    private name:string;
    private aircrafts: Aircraft[];
    private employees: Employee[];
    private flights: Flight[];
    private availableFlight: Route[]
    constructor(name: string, aircrafts: Aircraft[],employees: Employee[], flights: Flight[],availableFlight: Route[]) {
        this.name = name;
        this.aircrafts = aircrafts;
        this.employees = employees;
        this.flights = flights;
        this.availableFlight = availableFlight;
        
    }
}