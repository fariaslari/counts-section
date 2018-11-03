import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Totals } from '../../models/totals';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnInit {

  settled: boolean;
  @Input() totals: Totals;
  @Output() settle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.settled = false;
    this.totals = {
      totalItems: 0,
      totalRevenue: 0,
      totalSold: 0
    };
  }

  onClick() {
    this.settled = true;
    this.settle.emit(this.settled);
  }

  formatCurrency(value: any): string {
    value = Math.round(value * 100) / 100;
    return '$ ' + parseFloat(value).toFixed(2);
  }

  getPercent(): string {
    const percent = this.totals.totalSold * 100 / this.totals.totalItems;
    return '-' + percent.toString() + 's';
  }
}
