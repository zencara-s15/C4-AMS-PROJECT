import { Aircraft } from "./Airport/Aircraft";
import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";
import { BoardingGate } from "./Airport/BoardingGate";
import { Route } from "./Airport/Route";
import { BookingTrip } from "./Booking/BookingTrip";
import { Trip } from "./Booking/Trip";
import { Flight } from "./Flight/Flight";
import { Baggage } from "./Passenger/Baggage";
import { Passenger } from "./Passenger/Passenger";
import { Seat } from "./Passenger/Seat";
import { Ticket } from "./Passenger/Ticket";
import { AirlineManager } from "./People/AirlineManager";
import { Employee } from "./People/Employee";
import { FlightCrew } from "./People/FlightCrew";
import { GroundCrew } from "./People/GroundCrew";
import { People } from "./People/People";
import { Pilot } from "./People/Pilot";
import { DateTime } from "./Schedule/DateTime";
import { FlightSchedule } from "./Schedule/FlightSchedule";
import { Time } from "./Schedule/Time";


///------------------------------------------------------------

let PPTrip = new Trip("PP TO KPS")

console.log(PPTrip.getCusotmerDetails);
