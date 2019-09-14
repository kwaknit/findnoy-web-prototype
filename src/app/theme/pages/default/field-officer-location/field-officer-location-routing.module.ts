import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
        { path: '', component: MapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldOfficerLocationRoutingModule { }
