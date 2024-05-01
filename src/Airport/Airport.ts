import { Aircraft } from "./Aircraft";
import { Airline } from "./Airline";
import { BoardingGate } from "./BoardingGate";

export class Airport {
    private name: string;
    private country: string;
    private city: string;
    private aircrafts: Aircraft[];
    private airlines: Airline[] ;
    private boardingGates: BoardingGate[]
    constructor( name: string, country: string, city: string, aircrafts: Aircraft[], airlines: Airline[] , boardingGates: BoardingGate[]) {
        this.name = name;
        this.country = country;
        this.city = city;
        this.aircrafts = aircrafts;
        this.airlines = airlines;
        this.boardingGates = boardingGates;
        
    }
}