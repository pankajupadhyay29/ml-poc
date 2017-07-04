import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRateTrendComponent } from './request-rate-trend.component';

describe('RequestRateTrendComponent', () => {
  let component: RequestRateTrendComponent;
  let fixture: ComponentFixture<RequestRateTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRateTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRateTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
