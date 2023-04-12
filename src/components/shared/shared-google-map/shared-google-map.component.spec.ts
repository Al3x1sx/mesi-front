import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedGoogleMapComponent } from './shared-google-map.component';

describe('SharedGoogleMapComponent', () => {
  let component: SharedGoogleMapComponent;
  let fixture: ComponentFixture<SharedGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedGoogleMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
