import { Component, OnInit } from '@angular/core';
import { PricesDataService } from 'src/app/services/prices-data.service';

@Component({
  selector: 'app-province-selector',
  templateUrl: './province-selector.component.html',
  styleUrls: ['./province-selector.component.css']
})
export class ProvinceSelectorComponent implements OnInit {

  provinces: string[] = [
    "Provincia de Buenos Aires (excepto AMBA)",
    "Chaco",
    "Chubut",
    "Catamarca",
    "Área Metropolitana de Buenos Aires (AMBA)",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "Tucumán"
  ]

  selectedProvince: number = -1;

  constructor(
    private priceDataSerivce: PricesDataService,
  ) { }

  ngOnInit(): void {
    this.provinces = this.provinces.sort();
    this.priceDataSerivce.GetPricesByProvince(this.provinces[2])
      .subscribe(res => {
        console.log(res);
      });
  }

}
