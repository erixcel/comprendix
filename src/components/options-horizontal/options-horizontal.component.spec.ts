import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsHorizontalComponent } from './options-horizontal.component';

describe('OptionsHorizontalComponent', () => {
  let component: OptionsHorizontalComponent;
  let fixture: ComponentFixture<OptionsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsHorizontalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
