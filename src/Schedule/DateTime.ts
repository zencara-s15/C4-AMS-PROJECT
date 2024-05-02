import { Time } from "./Time";

export class DateTime{
    public day:number
    public month:string
    public year:number
    private time:Time
    constructor(day:number, month:string, year:number){
        this.day = day;
        this.month = month;
        this.year = year;
    }
}