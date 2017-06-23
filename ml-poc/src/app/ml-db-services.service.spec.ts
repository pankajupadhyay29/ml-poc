import { TestBed, inject } from '@angular/core/testing';

import { MlDbServicesService } from './ml-db-services.service';

describe('MlDbServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlDbServicesService]
    });
  });

  it('should be created', inject([MlDbServicesService], (service: MlDbServicesService) => {
    expect(service).toBeTruthy();
  }));
});
