//DutchTreat\client\src\app\pages\loginPage.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../services/LoginResults';
import { Store } from '../services/store.service';

@Component({
    selector: 'login-page',
    templateUrl: 'loginPage.component.html'
})
export class LoginPage {
    constructor(private store: Store, private router: Router) { }

    public creds: LoginRequest = {
        username: '',
        password: ''
    };

    public errorMessage = '';

    onLogin() {
        this.store.login(this.creds).subscribe(() => {
            // Successfully logged in
            if (this.store.order.items.length > 0) {
                this.router.navigate(['checkout']);
            } else {
                this.router.navigate(['']);
            }
        }, error => {
            console.log(error);
            this.errorMessage = "Unable to login with given credentials!";
        });
    }
}