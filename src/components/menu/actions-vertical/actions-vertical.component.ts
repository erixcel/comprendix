import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionItemComponent } from '../action-item/action-item.component';
import { ActionName, actions } from '../../../core/constants/action.config';

@Component({
  selector: 'app-actions-vertical',
  standalone: true,
  imports: [CommonModule, ActionItemComponent],
  templateUrl: './actions-vertical.component.html',
})
export class ActionsVerticalComponent {
  actions = actions;
  @Input() actionHandlers: { [K in ActionName]?: () => void } = {};
}
