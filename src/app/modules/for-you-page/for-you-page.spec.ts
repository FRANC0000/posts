import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForYouPage } from './for-you-page';

describe('ForYouPage', () => {
  let component: ForYouPage;
  let fixture: ComponentFixture<ForYouPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForYouPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ForYouPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
