import { TestBed } from '@angular/core/testing';

import { EditInvoiceResolverService } from './edit-invoice-resolver.service';

describe('EditInvoiceResolverService', () => {
  let service: EditInvoiceResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditInvoiceResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
