import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryUsesTrendComponent } from './memory-uses-trend.component';

describe('MemoryUsesTrendComponent', () => {
  let component: MemoryUsesTrendComponent;
  let fixture: ComponentFixture<MemoryUsesTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryUsesTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryUsesTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
