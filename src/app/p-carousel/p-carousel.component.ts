import { Component, OnInit, Input } from '@angular/core';
import { FavoriteLocationsService } from '../_services/favorite-locations.service';
import {SelectItem} from 'primeng/components/common/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-p-carousel',
  templateUrl: './p-carousel.component.html',
  styleUrls: ['./p-carousel.component.css']
})
export class PCarouselComponent implements OnInit {
@Input() locationsList;
msgs: Message[] = [];
  constructor(private favoriteLocationsService: FavoriteLocationsService) { }

  ngOnInit() {
  }
  addToFavorites(location) {
    console.log(' add to favorites! location.name = ' + location.name);
    this.favoriteLocationsService.addToFavorites(location);
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: `${location.name} Added To Favorite`});
  }
}
