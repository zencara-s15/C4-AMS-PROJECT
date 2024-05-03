enum SeatType{
    Regular = "regular",
    Accessible = "accessible",
    EmergencyExit= "emergency",
    ExtraLegRoom= "extra-legroom",
}

enum SeatClass{
    Economy= "economy",
    EconomyPlus= "economy-plus",
    PreferredEconomy= "preferred-economy",
    Business= "business",
    FirstClass= "first-class",
}

export class Seat {
    private seatNumber: string;
    private seatType: SeatType;
    private  seatClass: SeatClass;
    
    constructor(seatNumber: string,seatType: SeatType,seatClass: SeatClass) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.seatClass = seatClass;
    }
}