import { BookingTrip } from "../Booking/BookingTrip";
import { Flight, FlightType } from "../Flight/Flight";
import { Gender, People } from "../People/People";
import { Baggage } from "./Baggage";

export enum MealType {
    BabyMeal,
    BlandMeal,
    ChildMeal,
    ToddlerMeal,
    DiabeticMeal,
    GlutenFreeMeal,
    LowSodium,
    HalalMeal,
    HinduMeal,
}

export class Passenger extends People{
    private flightType: FlightType;
    private meal: MealType;
    private flight: Flight;
    private baggages: Baggage;

    

    constructor(
        name: string,
        gender: Gender,
        address: string,
        email: string,
        phoneNumber: string,
        bookingTrip: BookingTrip,
        returnTicket: boolean,
        meal: MealType
    ) {
        super(name, gender, address, email, phoneNumber,);
        this.flightType = this.flightType;
        this.meal = meal;
    }

    getGateNumber(flight: Flight): string {
        this.flight = flight;
        return this.flight.getBoardingGate();
    }

    getBaggages(): Baggage {
        return this.baggages;
    }
    
    getTicketType(): FlightType {
        return this.flightType;
    }
    
}


