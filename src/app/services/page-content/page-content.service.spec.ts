import { TestBed } from '@angular/core/testing';

import { PageContentService } from './page-content.service';

describe('PageContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageContentService = TestBed.get(PageContentService);
    expect(service).toBeTruthy();
  });
});
