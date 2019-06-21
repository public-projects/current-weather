import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
isOnline = true;
locationsList;
  constructor(private locationService: LocationService) { }
  ngOnInit() {
    this.getLocations();
  }
  getLocations(): void {
    this.locationService.getLocations().subscribe(locationsList => {
      this.locationsList = locationsList;
    });
  }
}
