//DutchTreat\wwwroot\ts\shopper.ts
class Shopper {
    constructor(private first: string, private last: string) {
        this.firstName = first;
        this.lastName = last;
    }

    showName() {
        alert(`${this.firstName} ${this.lastName}`);
    }
}