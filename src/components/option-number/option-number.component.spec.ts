import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNumberComponent } from './option-number.component';

describe('OptionNumberComponent', () => {
  let component: OptionNumberComponent;
  let fixture: ComponentFixture<OptionNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
