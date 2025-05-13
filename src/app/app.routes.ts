import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'table',
        title: 'Dynamic table',
        loadComponent: () => import('./pages/dynamic-table/dynamic-table.component')
    },
    {
        path: 'directive',
        title: 'Directives',
        loadComponent: () => import('./pages/directives/directives.component')
    },
    {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./pages/change-detection/change-detection.component')
    },
    {
        path: 'button-footer',
        title: 'Button Footer',
        loadComponent: () => import('./pages/button-footer/button-footer.component')
    },
     {
        path: 'calculator',
        title: 'Calculator',
        loadComponent: () => import('./pages/calculator/calculator.component')
    },
    {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
    }
];
