import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import('./auth/Module/auth.module').then(a => a.AuthModule)
    },
    {
        path: "sidenav",
        loadChildren: () => import('./sidenav/Module/sidenav.module').then(a => a.SidenavModule)
    },
    {
        path: '**',
        redirectTo: 'auth/login' 
    }
];
