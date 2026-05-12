import { Routes } from '@angular/router';
import { Auth } from './modules/auth/auth';
import { ForYouPage } from './modules/for-you-page/for-you-page';

export const routes: Routes = [
    { path: 'auth', component: Auth },
    { path: 'fyp', component: ForYouPage },
    { path: '', redirectTo: '/auth', pathMatch: 'full' }
];
