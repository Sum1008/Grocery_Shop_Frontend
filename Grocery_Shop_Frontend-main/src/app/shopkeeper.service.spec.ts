import { TestBed } from '@angular/core/testing';

import { ShopkeeperService } from './ShopkeeperService';

describe('ShopkeeperService', () => {
  let service: ShopkeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopkeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
