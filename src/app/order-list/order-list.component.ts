import { Component, OnInit } from '@angular/core';
import { FavoriteLocationsService } from '../_services/favorite-locations.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  constructor(private favoriteLocationsService: FavoriteLocationsService) {}
  orderedList;
  selectedLocation;
  selectionArr = [];
  visibleSidebar2: any;
  ngOnInit() {
    this.orderedList = this.favoriteLocationsService.getFavorites();
  }
  removeFromFavorites(location) {
    this.favoriteLocationsService.removeFromFavorite(location);
  }
  onSelectionChange() {
    console.log('onSelectionChange()');
    if (this.selectionArr.length > 1) {
      this.selectionArr.shift();
    }
  }
}
