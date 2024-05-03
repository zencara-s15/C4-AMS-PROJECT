import { Aircraft } from "./Aircraft";
import { Airline } from "./Airline";
import { BoardingGate } from "./BoardingGate";

export class Airport {
    private name: string;
    private code: string;
    private country: string;
    private city: string;
    private airlines: Airline[] ;
    private aircrafts: Aircraft[];
    private boardingGates: BoardingGate[]
    
    constructor(name: string, country: string, city: string) {
        this.name = name;
        this.country = country;
        this.city = city;
    }

    getAirportName(): string {
        return this.name;
    }
    getAirportCode(): string {
        return this.code;
    }

    public getAirportLocation(): string[] {
        return [this.city, this.country];
    }

    public getAirportAirlines(): Airline[] {
        return this.airlines;
    }

}