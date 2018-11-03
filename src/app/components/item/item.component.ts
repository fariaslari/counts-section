import { Totals } from './../../models/totals';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { Count } from '../../models/count';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  gross: any;
  qtyAvail: any;
  totalSold: number;
  totalIn: number;
  showPopover: boolean;
  showNotes: boolean;
  count: Count;
  @Input() item: Item;
  @Input() settled: boolean;
  @Output() updateItemTotals = new EventEmitter<Totals>();
  constructor() { }

  ngOnInit() {
    this.count = {
      add: 0,
      comp: 0,
      countIn: this.item.initialQty,
      countOut: 0
    };
    this.totalIn = 0;
    this.totalSold = 0;
    this.gross = 0;
    this.qtyAvail = 0;
    this.showPopover = false;
  }

  updateTotals() {
    this.totalIn = parseInt(this.count.countIn.toString(), 10) + parseInt(this.count.add.toString(), 10);
    this.totalSold = this.totalIn - this.count.countOut - this.count.comp;
    this.qtyAvail = -this.totalSold;
    this.gross = this.totalSold * this.item.price;
    this.updateItemTotals.emit({
      totalItems: this.totalIn,
      totalRevenue: this.gross,
      totalSold: this.totalSold
    });
  }

  toggleNotes($event) {
    this.showNotes = $event.type === 'mouseover';
  }

  togglePopover() {
    this.showPopover = !this.showPopover;
  }

  formatCurrency(value: any): string {
    value = Math.round(value * 100) / 100;
    return '$ ' + parseFloat(value).toFixed(2);
  }

  getImagePath(): string{
    return `/assets/img/${this.item.image}`;
  }

  getPercent(): string {
    const percent = this.totalSold * 100 / this.totalIn;
    return '-' + percent.toString() + 's';
  }

}
