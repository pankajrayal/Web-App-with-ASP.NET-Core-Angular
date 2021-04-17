//DutchTreat\wwwroot\ts\shopper.ts
class Shopper {
    constructor(private first: string, private last: string) {
    }

    showName() {
        alert(`${this.first} ${this.last}`);
    }
}