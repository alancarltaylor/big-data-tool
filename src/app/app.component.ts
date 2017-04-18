import { Component, OnInit } from '@angular/core';
import { BigDataToolService } from './big-data-tool.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	display: any;
	constructor(private bigDataToolService: BigDataToolService){

	}

	ngOnInit(){
		this.display = this.bigDataToolService.display;
	}
}
