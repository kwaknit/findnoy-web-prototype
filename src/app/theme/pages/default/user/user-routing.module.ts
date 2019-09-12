import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from '../default.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CreateComponent } from './containers/create/create.component';
import { DetailComponent } from './containers/detail/detail.component';

const ROUTES: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'create', component: CreateComponent },
            { path: 'detail/:id', component: DetailComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
