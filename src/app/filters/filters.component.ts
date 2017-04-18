import { Component, OnInit } from '@angular/core';
import { BigDataToolService } from '../big-data-tool.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(private bigDataToolService: BigDataToolService) { }

  ngOnInit() {
  }

  showAllFilters() {
      this.bigDataToolService.display.allFilters = true;
  }

  hideFilters() {
      this.bigDataToolService.display.allFilters = false;
  }

  clearAllFilters() {
      this.bigDataToolService.locFilter = {};
      this.bigDataToolService.searchText = "";
  }


}
