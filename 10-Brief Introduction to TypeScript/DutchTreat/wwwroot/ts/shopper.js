//DutchTreat\wwwroot\ts\shopper.ts
var Shopper = /** @class */ (function () {
    function Shopper(first, last) {
        this.first = first;
        this.last = last;
        this.firstName = first;
        this.lastName = last;
    }
    Shopper.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
    };
    return Shopper;
}());
//# sourceMappingURL=shopper.js.map