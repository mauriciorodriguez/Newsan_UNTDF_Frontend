import { Component, OnInit } from '@angular/core';
import { IPrice } from 'src/app/interfaces/IPrice';
import { IProvince } from 'src/app/interfaces/IProvince';
import { PricesDataService } from 'src/app/services/prices-data.service';
import { ProvincesDataService } from 'src/app/services/provinces-data.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  private selectedProvince: IProvince;

  private prices: IPrice[] = [];

  constructor(
    private PricesDataservice: PricesDataService,
    private provinceDataService: ProvincesDataService,
  ) { }

  ngOnInit(): void {

  }

  loadSelectedProvince() {
    this.provinceDataService.getProvinceById(2).subscribe(
      (res: IProvince) => {
        this.pro
      }
    )
  }

  loadAllPrices() {
    this.PricesDataservice.getPricesByProvince(this.selectedProvince.name)
      .subscribe((res: IPrice[]) => {
        this.prices = res;
      })
  }

}
