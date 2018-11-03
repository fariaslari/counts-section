import { Component, ElementRef, OnInit, ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Totals } from '../../models/totals';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  settled: boolean;
  totals: Totals;
  constructor() { }

  ngOnInit() {

  }

  updateTotals(totals: Totals) {
    this.totals = totals;
  }

  settleGrid(settle: boolean) {
    this.settled = settle;
  }

}
