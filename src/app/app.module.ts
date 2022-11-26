import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinceSelectorComponent } from './components/province-selector/province-selector.component';
import { PricesDataService } from './services/prices-data.service';
import { PriceListComponent } from './components/price-list/price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceSelectorComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PricesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
