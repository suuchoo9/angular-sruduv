import {Component} from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
  costnew:number
}

/**
 * @title Footer row table
 */
@Component({
  selector: 'table-footer-row-example',
  styleUrls: ['table-footer-row-example.css'],
  templateUrl: 'table-footer-row-example.html',
})
export class TableFooterRowExample {
  displayedColumns: string[] = ['item', 'cost','costnew'];
  transactions: Transaction[] = [
    {item: 'Beach ball', costnew:50,cost: 4},
    {item: 'Towel', costnew:50,cost: 5},
    {item: 'Frisbee', costnew:50,cost: 2},
    {item: 'Sunscreen', costnew:50,cost: 4},
    {item: 'Cooler', costnew:50,cost: 25},
    {item: 'Swim suit', costnew:50,cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  getTotalCostnew() {
    return this.transactions.map(t => t.costnew).reduce((acc, value) => acc + value, 0);
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */