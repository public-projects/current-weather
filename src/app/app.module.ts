import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {CarouselModule} from 'primeng/carousel';
import {OrderListModule} from 'primeng/orderlist';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { PCarouselComponent } from './p-carousel/p-carousel.component';
import { LocationService } from './location.service';
import { FavoriteLocationsService } from './_services/favorite-locations.service';
import { OrderListComponent } from './order-list/order-list.component';
import { OsmMapComponent } from './osm-map/osm-map.component';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoriteComponent,
    CarouselItemDirective,
    PCarouselComponent,
    OrderListComponent,
    OsmMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    OrderListModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule
  ],
  /*singletone service */
  providers: [LocationService, FavoriteLocationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
