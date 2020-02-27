import { async, TestBed } from '@angular/core/testing';
import { CustomButtonModule } from './custom-button.module';

describe('CustomButtonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomButtonModule).toBeDefined();
  });
});
