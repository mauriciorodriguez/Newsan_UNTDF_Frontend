import { Component, Input, OnInit } from '@angular/core';
import { PricesDataService } from 'src/app/services/prices-data.service';

@Component({
  selector: 'app-province-selector',
  templateUrl: './province-selector.component.html',
  styleUrls: ['./province-selector.component.css']
})
export class ProvinceSelectorComponent implements OnInit {

  @Input() provincesAndCodes: { id: string, provinceCode: string }[] = []

  selectedProvinceCode: { id: string, provinceCode: string } = { id: "Catamarca", provinceCode: "" }

  constructor() { }

  ngOnInit(): void { }

  onProvinceSelect(event: any) {
    this.selectedProvinceCode = event.id;
    console.log(this.selectedProvinceCode);
  }

}
