enum MealType{
    BabyMeal,
    BlandMeal,
    ChildMeal,
    ToddlerMeal,
    DiabeticMeal,
    GluntenFreeMeal,
    LowSodium, 
    HalalMeal,
    HinduMeal
}

export class Passenger {
    private returnTicket: boolean;
    private meal: MealType 
    constructor(returnTicket: boolean, meal: MealType ) {
        this.returnTicket = returnTicket;
        this.meal = meal;
        
    }
    getGateNumber(_flight: any,_date: any){

    }
}