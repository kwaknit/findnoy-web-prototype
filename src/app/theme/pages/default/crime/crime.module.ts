import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CreateComponent } from './containers/create/create.component';
import { DetailComponent } from './containers/detail/detail.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CrimeRoutingModule } from './crime-routing.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        CrimeRoutingModule
    ],
    declarations: [
        DashboardComponent,
        CreateComponent,
        DetailComponent]
})
export class CrimeModule { }
