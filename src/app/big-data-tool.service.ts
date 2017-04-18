import { Injectable } from '@angular/core';

@Injectable()
export class BigDataToolService {
	locations = [
		{rent: "5",
		 qty: "12", 
		 neighborhood: "Dallas",
		 city: "Lewisville", 
		 address: "123 Maple Ave" 
		},
		{rent: "67",
		 qty: "56", 
		 neighborhood: "Denver",
		 city: "Longmont", 
		 address: "123 Oak Ave" 
		},
		{rent: "455",
		 qty: "22", 
		 neighborhood: "New York",
		 city: "Boulder", 
		 address: "123 Pine Ave" 
		},
		{rent: "77",
		 qty: "7", 
		 neighborhood: "Toronto",
		 city: "Westminster", 
		 address: "123 Sumac Ave" 
		}
	];
	display = {
		allFilters: false,
        map: true,
        filters: false,
        list: false
	};
	locFilter = {};
	searchText = ""
  constructor() {}


	getLocations(){
		return this.locations;
	}
}
