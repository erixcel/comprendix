import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMoveComponent } from './game-move.component';

describe('GameMoveComponent', () => {
  let component: GameMoveComponent;
  let fixture: ComponentFixture<GameMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameMoveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
