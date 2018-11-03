import { Totals } from './../../models/totals';
import { ItemService } from './../../services/item.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  items: Item[];
  totals: Totals[];
  @Input() settled: boolean;
  @Output() updateTotals = new EventEmitter<Totals>();
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.totals = [];
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  updateItemTotals(index: number, itemTotals: Totals) {
    this.totals[index] = itemTotals;
    console.log(index, itemTotals);
    let totalsSum: Totals = {
      totalItems: 0,
      totalRevenue: 0,
      totalSold: 0
    };
    this.totals.forEach((t) => {
      totalsSum.totalItems += t.totalItems;
      totalsSum.totalRevenue += t.totalRevenue;
      totalsSum.totalSold += t.totalSold;
    });

    this.updateTotals.emit(totalsSum);
  }

}

export interface ItemTotals {
  index: number;
  totals: Totals;
}
