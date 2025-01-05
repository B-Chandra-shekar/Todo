import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { authGuard } from './authentication/guard/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', loadComponent : () => import('./User/dashboard/dashboard.component').then(m=> m.DashboardComponent), canActivate:[authGuard]},
    { path: 'todo-list', loadComponent: () => import('./User/todo-list/todo-list.component').then(m=> m.TodoListComponent), canActivate:[authGuard]},
    { path: 'todo/:id', loadComponent: ()=> import('./User/todo-detail/todo-detail.component').then(m=> m.TodoDetailComponent), canActivate:[authGuard]},
    { path: '**', loadComponent : () => import('./error/error.component').then(m => m.ErrorComponent) }
];
