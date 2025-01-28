import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent:()=> import ('./common/medicos-list/medicos-list.component')
    }
];
