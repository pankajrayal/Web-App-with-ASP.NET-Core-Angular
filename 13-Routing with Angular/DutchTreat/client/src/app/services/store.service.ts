//DutchTreat\client\src\app\services\store.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../shared/Product';
import { Observable } from 'rxjs';
import { Order, OrderItem } from '../shared/Order';
import { LoginRequest, LoginResults } from './LoginResults';

@Injectable()
export class Store {
    public products: Product[] = [];
    public order: Order = new Order();
    public token = "";
    public expiration = new Date();

    constructor(private http: HttpClient) { }

    loadProducts(): Observable<void> {
        return this.http.get<Product[]>('/api/products')
            .pipe(map(data => {
                this.products = data;
                return;
            }));
    }

    get loginRequired(): boolean {
        return this.token.length === 0 || this.expiration < new Date();
    }

    login(creds: LoginRequest) {
        return this.http.post<LoginResults>('/account/createtoken', creds)
            .pipe(map(data => {
                this.token = data.token;
                this.expiration = data.expiration;
            }));
    }

    addToOrder(product: Product) {
        let item: OrderItem;

        item = this.order.items.find(o => o.productId === product.id);

        if (item) {
            item.quantity++;
        } else {
            item = new OrderItem();
            item.productId = product.id;
            item.productTitle = product.title;
            item.productArtId = product.artId;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    }

    checkout() {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        return this.http.post('/api/orders', this.order, {
            headers: headers
        }).pipe(map(data => {
            this.order = new Order();
        }));
    }
}