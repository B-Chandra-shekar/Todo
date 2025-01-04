import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', loadComponent : () => import('./User/dashboard/dashboard.component').then(m=> m.DashboardComponent)},
    { path: '**', loadComponent : () => import('./error/error.component').then(m => m.ErrorComponent) }
];
