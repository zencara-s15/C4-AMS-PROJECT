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

// AirlineManager

let airlineManager = new AirlineManager(
    "Zencara",
    Gender.Male,
    "1233 Elm Street",
    "zencara@example.com",
    "987-654-3210",
    8,
    Skills.ManagingAirline,
    10000
);

// date 
let date1 = new DateTime(14,"Jan", 2024);

let jan12= new DateTime(12,"Jan",2024);

// create duration
let min90 = new Time(90)

// flgiht schedule

let schedule1 = new FlightSchedule([date1]);


// airport

let PhnomPenhAirport = new Airport("Phnom Penh International Airport", "Cambodia", "Phnom Penh");
let SingaporeChangiAirport = new Airport("Singapore Changi Airport", "Singapore", "Changi");
let TokyoAirport = new Airport("Tokyo Haneda Airport", "Japan", "Tokyo");
let LondonAirport = new Airport("London Heathrow Airport", "United Kingdom", "London");
let ParisAirport = new Airport("Paris Charles de Gaulle Airport", "France", "Paris");
let DubaiAirport = new Airport("Dubai International Airport", "United Arab Emirates", "Dubai");
let NewYorkAirport = new Airport("KoriChuma International Airport", "United States", "New York");
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

// fligthCrew 

const flightCrew1 = new FlightCrew(
    "Li Wei",
    Gender.Female,
    "123 Main St",
    "liwei@example.com",
    "1234567890",
    5,
    Skills.Hospitality,
    5000
  );
  
  const flightCrew2 = new FlightCrew(
    "Yuki Tanakah",
    Gender.Female,
    "456 Elm St",
    "yuki.tanakah@example.com",
    "9876543210",
    3,
    Skills.Hospitality,
    4000
  );
  
  const flightCrew3 = new FlightCrew(
    "David Lee",
    Gender.Male,
    "789 Oak St",
    "david.lee@example.com",
    "5555555555",
    7,
    Skills.OperationAirplane,
    5500
  );
  
  const flightCrew4 = new FlightCrew(
    "Hiroshi Nakamura",
    Gender.Female,
    "321 Pine St",
    "hiroshi.nakamura@example.com",
    "7777777777",
    2,
    Skills.CustomerService,
    3000
  );
  
  const flightCrew5 = new FlightCrew(
    "Kim Soo-Min",
    Gender.Male,
    "987 Maple St",
    "kimso.min@example.com",
    "4444444444",
    4,
    Skills.CustomerService,
    4800
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

// Baggage 

let baggage1 = new Baggage("BO01", 50);

// ticket 

let ticket1 = new Ticket(10221);



// ----------------------------------------------Method---------------------------------------------------


// airport methhod-----

//-- add flight to airline -- 
// CambodiaAirline.addFlight(flight1);

//-- add airCraft to airline -- 
// CambodiaAirline.addAircraft(aircraft1);

//-- add employee to airline -- 
// CambodiaAirline.addEmployee();

//-- add airline manager to airline -- 
// CambodiaAirline.addAirlineManager();

//-- getAvaiableFlight -- 
// console.log(CambodiaAirline.getAvailableFlights());



// BoardingGate method----

//-- get gate number -- 
// console.log(A11C.getGateNumber());



// Route method----

//-- get raoute details-- 
// console.log(route1.getRouteDetails())



// boooking method----

//-- get booking date-- 
// console.log(booking1.getBookingDate());

//-- get bookingReference number-- 
// console.log(booking1.getBookingReferenceNumber());

//-- get passenger details-- 
// console.log(booking1.getPassenger());

// Trip method----

//-- get trip name-- 
// console.log(trip1.getTripName());

//-- get count number of passernger-- 
// console.log(trip1.getNumberOfPassenger());

//-- get add another booking to trip-- 
// trip1.addBooking(booking1);

// to get customer detail by booking reference number
// console.log(trip1.getCusotmerDetails("FL001"));



// Fligtht method----

//-- get flight id-- 
// console.log(flight1.getFlightID());

//-- add pilots-- 
// flight1.addPilot(pilot1, pilot2);

//-- add flgihtCrew-- 
// flight1.addFlightCrew(flightCrew1,flightCrew2,flightCrew3);

 //-- add passenger-- 
// flight1.addPassenger(Passenger1, Passenger2);

//-- get trip-- 
// console.log(flight1.getTrip());

//-- get deatial route -- 
// console.log(flight1.getRoute());

//-- get flight schedule-- 
// console.log(flight1.getFlightSchedule());

//-- show boardingGate-- 
// console.log(flight1.getBoardingGate());

//-- get number of passenger--
// console.log(flight1.countReturnPassengers())

//-- display flight detail--
// console.log(flight1.getFlightDetail());



// Passenger method----

//-- passenger want to know gate number--
// console.log(Passenger1.getGateNumber(flight1)) ***

//-- passenger add and get baggage--
// Passenger1.addBaggages(baggage1) 
// console.log(Passenger1.getBaggages());

//-- passsenger ticket --
// Passenger1.addTicket(ticket1)
// console.log(Passenger1.getTicket())



// Airline Manager method----

// airline manager add employee--
// airlineManager.addManagedEmployee(flightCrew1, pilot1,)

//-- get total salary of employee--
// console.log(airlineManager.getEmployeeAllSalary());


// Date method----

//-- get date object detail -- 
// console.log(date1.getDate())

// Flight Schedule method----

//-- set date for a scheduled flight -- 
// schedule1.setDepartureDate([date1])

//-- see detial of a scheduled flight -- 
// console.log(schedule1.getScheduleDetails());


