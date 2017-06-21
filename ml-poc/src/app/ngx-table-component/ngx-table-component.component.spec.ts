import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableComponentComponent } from './ngx-table-component.component';

describe('NgxTableComponentComponent', () => {
  let component: NgxTableComponentComponent;
  let fixture: ComponentFixture<NgxTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
