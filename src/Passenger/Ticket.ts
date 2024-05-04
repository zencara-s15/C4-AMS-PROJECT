import { FlightType } from "../Flight/Flight";

export class Ticket {
  private ticketID: number;
  private flightType: FlightType;

  constructor(ticketID: number, flightType: FlightType) {
    this.ticketID = ticketID;
    this.flightType = flightType;
  }

  getFlightType(): FlightType {
    return this.flightType;
  }
}