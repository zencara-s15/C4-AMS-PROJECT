enum FlightType{
    OneWay,
    RoundTrip
}
export class Flight{
    constructor(private flightType:FlightType, private flightID:number, private flightRoutes:Routes[], private trip:Trip, private passengers:Passenger[], private flightSchedule:FlightSchedule[]){
        this.flightID = flightID;
        this.flightType = flightType;
        this.flightRoutes = flightRoutes;
        this.trip = trip;
        this.passengers = passengers;
        this.flightSchedule = flightSchedule;
    }
}