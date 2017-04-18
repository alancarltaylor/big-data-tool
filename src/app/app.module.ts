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


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LocDetailModalComponent,
    LocationListComponent,
    FiltersComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule 
  ],
  providers: [BigDataToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
