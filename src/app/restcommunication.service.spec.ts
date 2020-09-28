import { TestBed } from '@angular/core/testing';

import { RESTcommunicationService } from './restcommunication.service';

describe('RESTcommunicationService', () => {
  let service: RESTcommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTcommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
