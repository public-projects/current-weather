import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LocationsList } from './locations-list';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url: string;
  constructor(private http: HttpClient) { }

  getLocations(): Observable<City[]> {
      this.url =
        // tslint:disable-next-line:max-line-length
        'https://api.openweathermap.org/data/2.5/find?lat=32.080879&lon=34.780571&cnt=50&units=metric&APPID=2a06be742bbe01cd956c55889e122218';
      return this.http.get(this.url).pipe(
        map((locationsList: LocationsList) => {
          console.log('fetched locations res = ');
          console.log(locationsList);
          if (locationsList.hasOwnProperty('list')) {
            console.log('own list service ');
            return this.sortLocationsList(locationsList.list);
          } else {
            return this.sortLocationsList(locationsList);
          }
        }),
        catchError(err => {
          console.log('fetched error');
          return of(err);
        })
      );
  }
  sortLocationsList(locationsList) {
    return locationsList.sort((a, b) => {
      return b.main.temp - a.main.temp;
    });
  }
}
