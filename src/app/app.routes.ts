import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'table',
        title: 'Dynamic table',
        loadComponent: () => import('./pages/dynamic-table/dynamic-table.component')
    },
    {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
    }
];
