import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {

  private modalPhraseState = new BehaviorSubject<{
    isOpen: boolean,
    content: string,
    foxType: number
  }>({
    isOpen: false,
    content: '',
    foxType: 1
  });

  modalPhraseState$ = this.modalPhraseState.asObservable();

  constructor() { }

  openModalPhrase(content: string, foxType: number = 1) {
    this.modalPhraseState.next({
      isOpen: true,
      content,
      foxType
    });
  }

  closeModalPhrase() {
    this.modalPhraseState.next({
      ...this.modalPhraseState.value,
      isOpen: false
    });
  }
}
