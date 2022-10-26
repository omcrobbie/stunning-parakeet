import { MockHttpModule } from './mock-hero.service';
import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MockHttpModule],
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return mock data', () => {
    service.getHeroes().subscribe((data) => {
      expect(data[0].name).toBe('shitballz');
    });
  });
});
