//DutchTreat\client\src\app\shared\Order.ts
export class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    productId: number;
    productCategory: string;
    productSize: string;
    productTitle: string;
    productArtist: string;
    productArtId: string;
}

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: OrderItem[] = [];

    get subTotal(): number {
        const result = this.items.reduce((tot, val) => {
            return tot + (val.unitPrice * val.quantity);
        }, 0);

        return result;
    }
}