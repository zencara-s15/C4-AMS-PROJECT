import { Aircraft } from "./Airport/Aircraft";
import { Airline } from "./Airport/Airline";
import { Airport } from "./Airport/Airport";
import { BoardingGate } from "./Airport/BoardingGate";
import { Route } from "./Airport/Route";
import { BookingTrip } from "./Booking/BookingTrip";
import { Trip } from "./Booking/Trip";
import { Flight, FlightType } from "./Flight/Flight";
import { Baggage } from "./Passenger/Baggage";
import { MealType, Passenger } from "./Passenger/Passenger";
import { Seat } from "./Passenger/Seat";
import { Ticket } from "./Passenger/Ticket";
import { AirlineManager } from "./People/AirlineManager";
import { Employee, Skills } from "./People/Employee";
import { FlightCrew } from "./People/FlightCrew";
import { GroundCrew } from "./People/GroundCrew";
import { Gender, People } from "./People/People";
import { Pilot } from "./People/Pilot";
import { DateTime } from "./Schedule/DateTime";
import { FlightSchedule } from "./Schedule/FlightSchedule";
import { Time } from "./Schedule/Time";


///------------------------------------------------------------

// Airline ----------
// let ChinaAirline = new Airline('China Airline');
// console.log(ChinaAirline);

// // BaordingGae ............
// let Gate1 = new BoardingGate('')

// Airport..............
// let departureAirport = new Airport("pp International Airport", "keng kong", "Phnom phenh");
// let arrivalAirport = new Airport("New Yok International Airport", "United States", "New Yok");
// let durationMinutes = 300;

// route ...............
// date 
let date1 = new DateTime(14,"Jan", 2024);

// create duration
let min90 = new Time(90)

// flgiht schedule

let schedule1 = new FlightSchedule([date1]);


let PhnomPenhAirport = new Airport("Phnom Penh International Airport", "Cambodia", "Phnom Penh");
let SingaporeChangiAirport = new Airport("Singapore Changi Airport", "Singapore", "Changi");
let TokyoAirport = new Airport("Tokyo Haneda Airport", "Japan", "Tokyo");
let LondonAirport = new Airport("London Heathrow Airport", "United Kingdom", "London");
let ParisAirport = new Airport("Paris Charles de Gaulle Airport", "France", "Paris");
let DubaiAirport = new Airport("Dubai International Airport", "United Arab Emirates", "Dubai");
let NewYorkAirport = new Airport("John F. Kennedy International Airport", "United States", "New York");
let BeijingAirport = new Airport("Beijing Capital International Airport", "China", "Beijing");
let SydneyAirport = new Airport("Sydney Airport", "Australia", "Sydney");
let JohannesburgAirport = new Airport("O.R. Tambo International Airport", "South Africa", "Johannesburg");
let RioDeJaneiroAirport = new Airport("Rio de Janeiro-Galeão International Airport", "Brazil", "Rio de Janeiro");

// airline 

let CambodiaAirline = new Airline("Cambodia Airline");
let JapanAirways = new Airline("Japan Airways");
let BritishAirways = new Airline("British Airways");
let AirFrance = new Airline("Air France");
let Emirates = new Airline("Emirates");
let DeltaAirLines = new Airline("Delta Air Lines");
let AirChina = new Airline("Air China");
let Qantas = new Airline("Qantas");
let SouthAfricanAirways = new Airline("South African Airways");
let LATAMAirlines = new Airline("LATAM Airlines");

// Aircraft 

const aircraft1 = new Aircraft("SN001", 200);
const aircraft2 = new Aircraft("SN002", 150);
const aircraft3 = new Aircraft("SN003", 180);
const aircraft4 = new Aircraft("SN004", 250);
const aircraft5 = new Aircraft("SN005", 160);
const aircraft6 = new Aircraft("SN006", 190);
const aircraft7 = new Aircraft("SN007", 220);
const aircraft8 = new Aircraft("SN008", 170);

// Passenger

let Passenger1 = new Passenger("Chin SireyPuthiReach", Gender.Male, "123 Main Street", "chinsereyputhireach@gmail.com", "123-456-7890");
let Passenger2 = new Passenger("Chok SreyMom", Gender.Male, "123 Main Street", "chinsereyputhireach@gmail.com", "123-456-7890");
let Passenger3 = new Passenger("Ley Tem", Gender.Male, "123 Main Street", "chinsereyputhireach@gmail.com", "123-456-7890");

// Pilot

let pilot1 = new Pilot(
    "John Smith",
    Gender.Male,
    "123 Main Street",
    "john.smith@example.com",
    "123-456-7890",
    5,
    Skills.OperationAirplane,
    8000
);
let pilot2 = new Pilot(
    "Jane Johnson",
    Gender.Female,
    "456 Elm Street",
    "jane.johnson@example.com",
    "987-654-3210",
    8,
    Skills.OperationAirplane,
    10000
);

let pilot3 = new Pilot(
    "Michael Davis",
    Gender.Male,
    "789 Oak Street",
    "michael.davis@example.com",
    "555-123-4567",
    10,
    Skills.OperationAirplane,
    12000
);


//route

let route1 = new Route(PhnomPenhAirport,NewYorkAirport, min90)

// boardingGate

let A11C = new BoardingGate("A11C");

// boookingTrip

let booking1 = new BookingTrip("FL001",Passenger1,BritishAirways)

// trip 

let trip1 = new Trip("Happy Trip",99);

// flight

let flight1 = new Flight("FL001",FlightType.OneWay, [route1], trip1,[schedule1]);

// airport methhod-----

// CambodiaAirline.addAircraft(aircraft1);

// CambodiaAirline.addFlight();

// CambodiaAirline.addEmployee();

// CambodiaAirline.addAirlineManager();

// CambodiaAirline.getAvailableFlights();


// BoardingGate method----

// console.log(A11C.getGateNumber());


// Route method----

// console.log(route1.getRouteDetails())


// boooking method----

// console.log(booking1.getBookingDate()); --------------------------------
// console.log(booking1.getBookingReferenceNumber());
// console.log(booking1.getPassenger());

// Trip method----

// console.log(trip1.getTripName());
// console.log(trip1.getNumberOfPassenger());
// trip1.addBooking(booking1);

// to get customer detail by booking reference number

// console.log(trip1.getCusotmerDetails("FL001")); ----------------


// Fligtht method----

// console.log(flight1.getFlightID());

// Passenger method----
// Airline MAnager method----
// Employee method----
// Date method----
// Flight Schedule method----
// Time method----

