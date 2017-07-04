import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbAvailabilityTrendComponent } from './db-availability-trend.component';

describe('DbAvailabilityTrendComponent', () => {
  let component: DbAvailabilityTrendComponent;
  let fixture: ComponentFixture<DbAvailabilityTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbAvailabilityTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbAvailabilityTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
