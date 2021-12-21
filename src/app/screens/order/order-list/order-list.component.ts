import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Observable<any[]>;

  constructor(
    private orderService: OrderService
  ) {
    this.orders = orderService.getOrders();
  }

  ngOnInit() {}

}
