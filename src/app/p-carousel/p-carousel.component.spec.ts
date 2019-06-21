import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCarouselComponent } from './p-carousel.component';

describe('PCarouselComponent', () => {
  let component: PCarouselComponent;
  let fixture: ComponentFixture<PCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
