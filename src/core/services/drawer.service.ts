import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private drawerState = new BehaviorSubject<{
    isOpen: boolean
  }>({
    isOpen: false
  });

  drawerState$ = this.drawerState.asObservable();

  constructor() { }

  openDrawer() {
    this.drawerState.next({
      isOpen: true
    });
  }

  closeDrawer() {
    this.drawerState.next({
      isOpen: false
    });
  }

  toggleDrawer() {
    const currentState = this.drawerState.value;
    this.drawerState.next({
      isOpen: !currentState.isOpen
    });
  }
}