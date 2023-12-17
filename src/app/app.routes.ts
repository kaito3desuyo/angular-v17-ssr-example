import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./default/default.component').then((comp) => comp.DefaultComponent)
    },
    {
        path: 'example1',
        loadComponent: () => import('./example1/example1.component').then((comp) => comp.Example1Component)
    },
    {
        path: 'example2',
        loadComponent: () => import('./example2/example2.component').then((comp) => comp.Example2Component)
    }
];
