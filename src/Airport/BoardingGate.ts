
export class BoardingGate {
    private gateNumber: string
    constructor(gateNumber: string) {
        this.gateNumber = gateNumber;
    }
    getGateNumber(): string {
        return this.gateNumber
    };
}