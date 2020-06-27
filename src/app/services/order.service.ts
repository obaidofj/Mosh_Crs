import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}
  getOrders() {
    return ['order1', 'order2', 'order3'];
  }
}
