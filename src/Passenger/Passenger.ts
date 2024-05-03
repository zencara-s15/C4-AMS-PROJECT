import { BookingTrip } from "../Booking/BookingTrip";
import { Flight, FlightType } from "../Flight/Flight";
import { Gender, People } from "../People/People";
import { Baggage } from "./Baggage";
import { Ticket } from "./Ticket";

export enum MealType {
    BabyMeal="babymeal",
    BlandMeal="blandmeal",
    ChildMeal="childmeal",
    ToddlerMeal="childmeal",
    DiabeticMeal="diabetic",
    GlutenFreeMeal="glutenfree",
    LowSodium="lowsodium",
    HalalMeal="halal",
    HinduMeal="hindu",
}

export class Passenger extends People{
    private flightType: FlightType;
    private meal: MealType;
    private flight: Flight;
    private baggages: Baggage;
    private bookingTrip: BookingTrip;
    private ticket: Ticket;
    constructor( name: string,gender: Gender,address: string,email: string,phoneNumber: string) {
        super(name, gender, address, email, phoneNumber,);
    }

    getGateNumber(flight: Flight): string {
        this.flight = flight;
        return this.flight.getBoardingGate();
    }

    addBaggages(baggage: Baggage): void {
        this.baggages = baggage;
    }
    getBaggages(): Baggage {
        return this.baggages;
    }

    addTicket(ticket: Ticket){
        this.ticket= ticket;
    }
    getTicket(): Ticket{
        return this.ticket
    }
        
    getFlightType(): FlightType {
        return this.flightType;
    }
    
}


