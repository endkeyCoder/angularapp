import { TestBed } from '@angular/core/testing';

import { RepositoriesGithubService } from './repositories-github.service';

describe('RepositoriesGithubService', () => {
  let service: RepositoriesGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoriesGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
