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


///------------------------------------------------------------ Object ------------------------------------------------------------


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
let jan14 = new DateTime(14,"Jan", 2024);
let jan12= new DateTime(12,"Jan",2024);


// create duration
let min90 = new Time(90)


// flgiht schedule
let schedule1 = new FlightSchedule([jan14]);


//route
let route1 = new Route(PhnomPenhAirport,NewYorkAirport, min90)


// boardingGate
let GATE_A11 = new BoardingGate("A11");


// trip 
let trip1 = new Trip("Happy Trip",99);


// boookingTrip
let booking1 = new BookingTrip("FL001",Passenger1,BritishAirways,trip1, jan12)
let booking2 = new BookingTrip("FL002",Passenger3,BritishAirways,trip1, jan12)


// flight
let flight1 = new Flight("FL001",FlightType.OneWay, [route1], trip1,[schedule1]);


// Baggage 
let baggage1 = new Baggage("BO01", 50);


// ticket 
let ticket1 = new Ticket(10221, FlightType.RoundTrip);


// ----------------------------------------------Method---------------------------------------------------


// airport methhod-----

//-- As a airline, I want to add new flight -- worked
CambodiaAirline.addFlight(flight1);

//-- As an airline, I want to add new airline manager -- worked
CambodiaAirline.addAircraft(aircraft1);

//-- As an airline, I want to add new employee -- worked
CambodiaAirline.addEmployee(flightCrew1);

//-- As an airline, I want to add new airline manager-- worked
CambodiaAirline.addAirlineManager(airlineManager);

//-- getAvaiableFlight -- not work
console.log(CambodiaAirline.getAvailableFlights());


// BoardingGate method---- worked

//-- get gate number -- Worked
console.log(GATE_A11.getGateNumber());


// Route method----

//-- Get route details-- worked
console.log(route1.getRouteDetails())


// BookingTrip method----

//-- IN a booking, I want to get booking date-- worked
console.log(booking1.getBookingDate());

//-- In a booking, I can get bookingReference number-- worked
console.log(booking1.getBookingReferenceNumber());

//-- In a boooking, I want to see detial of passenger-- Worked
console.log(booking1.getPassenger());

// Trip method----

//--In a trip, I can get the name of the trip-- worked
console.log(trip1.getTripName());

//--In a trip, I can Count number of passernger-- worked
console.log(trip1.getNumberOfPassenger());

//-- get add another booking to trip-- worked
trip1.addBooking(booking1);
trip1.addBooking(booking2);
// console.log(booking1);

//--To get passenger detail by booking reference number-- worked
let booking1RefNumber = booking1.getBookingReferenceNumber()
console.log(trip1.getCusotmerDetails(booking1RefNumber));

// Fligtht method----

//-- In a flight, I want to add gate-- worked 
flight1.addBoardingGate(GATE_A11);

//--In a flight, I want to get flightID-- worked
console.log(flight1.getFlightID());

//-- In a flight, I want to add pilots-- worked
flight1.addPilot(pilot1, pilot2);


//-- In a flight, I want to add flgihtCrew-- worked
flight1.addFlightCrew(flightCrew1,flightCrew2,flightCrew3);


//--In a flight, I want to addBooking-- not working
// flight1.addBooking(booking1)

//--In a flight, I need to get trip information-- worked
console.log(flight1.getTrip());

//--In a flight, I need to show Flight Route to passenger-- worked
console.log(flight1.getRoute());

//--In a flight, I need to show Flight Schedule to passenger-- worked
console.log(flight1.getFlightSchedule());

//--In a flight, I need to show waiting gate to passenger-- worked
console.log(flight1.getBoardingGate());

//-- In a flight, I want to count the number of return Passenger-- worked
console.log(flight1.countReturnPassengers())

//--In a Flight, It will show all the detail information -- worked
console.log(flight1.getFlightDetail());



// Passenger method----

//--As a passenger want to know gate number that my plane is waiting at-- worked
console.log(Passenger1.getGateNumber(flight1))

//--As a passenger, I want add and get baggage-- worked
Passenger1.addBaggages(baggage1) 
console.log(Passenger1.getBaggages());

//--As passsenger, I have a ticket -- worked
//add ticket to passenger before display it
Passenger1.addTicket(ticket1)
console.log(Passenger1.getTicket())



// Airline Manager method----

// As an airline manager, I want to add add employee-- worked
airlineManager.addManagedEmployee(flightCrew1, pilot1,)
//--As an airline manager, I want to get total salary of employee-- worked
console.log(airlineManager.getEmployeeAllSalary());


// Date method----

//-- get date object detail -- worked
console.log(jan14.getDate())



// Flight Schedule method----

//-- set date for a scheduled flight -- worked
schedule1.setDepartureDate([jan14])

//-- see detial of a scheduled flight -- worked
console.log(schedule1.getScheduleDetails());

console.log(flight1);