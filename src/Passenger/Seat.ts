enum SeatType{
    Regular,
    Accessible,
    EmergencyExit,
    ExtraLegRoom

}
enum SeatClass{
    Economy,
    EconomyPlus,
    PreferredEconomy,
    Business,
    FirstClass
}
export class Seat {
    private seatNumber: string;
    private seatType: SeatType;
    private  seatClass: SeatClass
    constructor(seatNumber: string,seatType: SeatType,seatClass: SeatClass) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.seatClass = seatClass;
    }
}