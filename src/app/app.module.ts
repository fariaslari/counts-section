import { DecimalPipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import localePtBr from '@angular/common/locales/pt';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import { AppComponent } from './components/app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ItemComponent } from './components/item/item.component';
import { TotalsComponent } from './components/totals/totals.component';
import { ItemService } from './services/item.service';

registerLocaleData(localePtBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    ProductGridComponent,
    ItemComponent,
    TotalsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '**', component: WizardComponent }
    ]),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    DecimalPipe,
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
