import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteLocationsService {
favorites: string[] = [];
  constructor() { }

  addToFavorites(location) {
    if (this.favorites.includes(location)) {
      alert(` ${location.name} is already favorite`);
      return;
    }
    this.favorites.push(location);
    if (this.favorites.length > 5) {
      console.log( this.favorites.shift());
    }
  }
  getFavorites() {
    return this.favorites;
  }
  removeFromFavorite(location) {
     const idx = this.favorites.indexOf(location);
     if (idx > -1) {
      this.favorites.splice(idx, 1);
    }
  }
}
