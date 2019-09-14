import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMapModule } from 'primeng/gmap';
import { FieldOfficerLocationRoutingModule } from './field-officer-location-routing.module';
import { MapComponent } from './map/map.component';
import { LayoutModule } from '../../../layouts/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FieldOfficerLocationRoutingModule,
    LayoutModule,
    GMapModule
  ],
  declarations: [MapComponent]
})
export class FieldOfficerLocationModule { }
