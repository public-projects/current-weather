import { TestBed } from '@angular/core/testing';

import { FavoriteLocationsService } from './favorite-locations.service';

describe('FavoriteLocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteLocationsService = TestBed.get(FavoriteLocationsService);
    expect(service).toBeTruthy();
  });
});
