import { BookingTrip } from "../Booking/BookingTrip";
import { Flight } from "../Flight/Flight";
import { Customer } from "../People/Customer";
import { Gender } from "../People/People";
import { Baggage } from "./Baggage";

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

export class Passenger extends Customer {
    private returnTicket: boolean;
    private meal: MealType;
    private flight: Flight;

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
        super(name, gender, address, email, phoneNumber, bookingTrip);
        this.returnTicket = returnTicket;
        this.meal = meal;
    }

    getGateNumber(flight: Flight): string {
        this.flight = flight;
        return this.flight.getBoardingGate();
    }
}


