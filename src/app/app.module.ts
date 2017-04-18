import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LocDetailModalComponent } from './loc-detail-modal/loc-detail-modal.component';
import { LocationListComponent } from './location-list/location-list.component';
import { FiltersComponent } from './filters/filters.component';
import { ControlsComponent } from './controls/controls.component';
import { BigDataToolService } from './big-data-tool.service';
import { HeaderComponent } from './header/header.component';
import { EsriLoaderService } from 'angular2-esri-loader';
import { Angular2Esri4Module } from 'angular2-esri4-components';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LocDetailModalComponent,
    LocationListComponent,
    FiltersComponent,
    ControlsComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    Angular2Esri4Module 
  ],
  providers: [BigDataToolService, EsriLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
