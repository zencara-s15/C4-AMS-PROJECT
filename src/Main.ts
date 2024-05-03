import { Aircraft } from "./Airport/Aircraft";
import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";
import { BoardingGate } from "./Airport/BoardingGate";
import { Route } from "./Airport/Route";
import { BookingTrip } from "./Booking/BookingTrip";
import { Trip } from "./Booking/Trip";
import { Flight } from "./Flight/Flight";
import { Baggage } from "./Passenger/Baggage";
import { MealType, Passenger } from "./Passenger/Passenger";
import { Seat } from "./Passenger/Seat";
import { Ticket } from "./Passenger/Ticket";
import { AirlineManager } from "./People/AirlineManager";
import { Employee } from "./People/Employee";
import { FlightCrew } from "./People/FlightCrew";
import { GroundCrew } from "./People/GroundCrew";
import { Gender, People } from "./People/People";
import { Pilot } from "./People/Pilot";
import { DateTime } from "./Schedule/DateTime";
import { FlightSchedule } from "./Schedule/FlightSchedule";
import { Time } from "./Schedule/Time";


///------------------------------------------------------------

// Airline ----------
let ChinaAirline = new Airline('China Airline');
console.log(ChinaAirline);

// BaordingGae ............
let Gate1 = new BoardingGate('')

// Airport..............
let departureAirport = new Airport("pp International Airport", "keng kong", "Phnom phenh");
let arrivalAirport = new Airport("New Yok International Airport", "United States", "New Yok");
let durationMinutes = 300; 

// route ...............
let route = new Route(departureAirport, arrivalAirport, durationMinutes);
console.log(route);

// passenger................
let  passenger = new Passenger(
    "Reach",
    Gender.Male,
    "123 Street, City",
    "reach@example.com",
    "123-456-7890",
    BookingTrip.BookingTrip,
    true,
    MealType.BabyMeal
);
console.log(passenger);

// Ticket....................
let nameOfTicket = new Ticket(2)
console.log(nameOfTicket);
// Baggage..........
let nameOfBaggage = new Baggage('3',50)
console.log(nameOfBaggage);
