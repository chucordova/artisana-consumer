// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  private itemsSubject = new BehaviorSubject<any[]>(this.items); // 👈 observable reactivo

  items$ = this.itemsSubject.asObservable(); // 👈 lo que consumen otros componentes

  constructor() {}

  addItem(item: any) {
    this.items.push(item);
    this.itemsSubject.next(this.items); // 🔔 notifica a los subscriptores
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items); // 🔔 notifica que se limpió
  }
}
