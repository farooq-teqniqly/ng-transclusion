import { async, TestBed } from '@angular/core/testing';
import { CardsListModule } from './cards-list.module';

describe('CardsListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CardsListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CardsListModule).toBeDefined();
  });
});
