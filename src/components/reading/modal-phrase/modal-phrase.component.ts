import { Component } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'app-modal-phrase',
  imports: [],
  templateUrl: './modal-phrase.component.html',
  styleUrl: './modal-phrase.component.css'
})
export class ModalPhraseComponent {
  isOpen = false;
  title = '';
  content = '';
  foxType = 1;

  constructor(private modalService: ModalService) {
    this.modalService.modalPhraseState$.subscribe(state => {
      this.isOpen = state.isOpen;
      this.title = state.title;
      this.content = state.content;
      this.foxType = state.foxType;
    });
  }

  close() {
    this.modalService.closeModalPhrase();
  }

  getFoxImage(): string {
    switch(this.foxType) {
      case 1: return './assets/foxes/fox1.svg';
      case 2: return './assets/foxes/fox2.svg';
      case 3: return './assets/foxes/fox3.svg';
      default: return './assets/foxes/fox-default.svg';
    }
  }
}
