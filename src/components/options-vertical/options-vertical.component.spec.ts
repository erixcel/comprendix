import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsVerticalComponent } from './options-vertical.component';

describe('OptionsVerticalComponent', () => {
  let component: OptionsVerticalComponent;
  let fixture: ComponentFixture<OptionsVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
