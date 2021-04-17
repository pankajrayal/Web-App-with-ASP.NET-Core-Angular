//DutchTreat\client\src\app\router\index.ts
import { RouterModule } from '@angular/router';
import { CheckoutPage } from '../pages/checkout.component';
import { LoginPage } from '../pages/loginPage.component';
import { ShopPage } from '../pages/shopPage.component';
import { AuthActivator } from '../services/authActivator.service';

const routes = [
    { path: '', component: ShopPage },
    { path: 'checkout', component: CheckoutPage, canActivate: [AuthActivator] },
    { path: 'login', component: LoginPage },
    { path: '**', redirectTo: '/' },
];
const router = RouterModule.forRoot(routes);
export default router;