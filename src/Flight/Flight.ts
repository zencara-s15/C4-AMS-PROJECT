import { Route } from "../Airport/Route"
import { Trip } from "../Booking/Trip"
import { Passenger } from "../Passenger/Passenger"
import { FlightSchedule } from "../Schedule/FlightSchedule"

enum FlightType{
    OneWay,
    RoundTrip
}
export class Flight{
    private flightType:FlightType
    private flightID:number
    private flightRoutes:Route[]
    private trip:Trip
    private passengers:Passenger[]
    private flightSchedule:FlightSchedule[]
    constructor(flightType:FlightType, flightID:number, flightRoutes:Route[], trip:Trip, passengers:Passenger[], flightSchedule:FlightSchedule[]){
        this.flightID = flightID;
        this.flightType = flightType;
        this.flightRoutes = flightRoutes;
        this.trip = trip;
        this.passengers = passengers;
        this.flightSchedule = flightSchedule;
    }
}