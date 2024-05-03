import { DateTime } from "./DateTime";

export class FlightSchedule{
    private departureDate:DateTime[]
    
    constructor(departureDate:DateTime[]){
        this.departureDate = departureDate;
    }
    setDepartureDate(departureDate:DateTime[]){
        this.departureDate = departureDate;
    }

    getScheduleDetails():DateTime[]{
        return this.departureDate;
    }

}