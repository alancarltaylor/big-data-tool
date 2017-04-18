import { Component, OnInit } from '@angular/core';
import { BigDataToolService } from '../big-data-tool.service'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  locations: any;
  constructor(private bigDataToolService: BigDataToolService) { }

  ngOnInit() {
  	this.locations = this.bigDataToolService.getLocations();
  }

}
