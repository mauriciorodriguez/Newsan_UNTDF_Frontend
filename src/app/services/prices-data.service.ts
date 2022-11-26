import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPrice } from '../interfaces/IPrice';

@Injectable({
  providedIn: 'root'
})
export class PricesDataService {

  private baseUrl: string = "./assets/api"

  constructor(
    private http: HttpClient
  ) { }

  getPricesByProvince(provinceName: string) {
    return this.http.get(this.baseUrl + "/" + provinceName + ".json")
      .pipe(
        map((res: any) => {

        })
      );
  }
}
