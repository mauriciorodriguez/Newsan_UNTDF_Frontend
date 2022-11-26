import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPrice } from '../interfaces/IPrice';

@Injectable({
  providedIn: 'root'
})
export class PricesDataService {

  constructor(
    private http: HttpClient
  ) { }

  public GetPricesByProvince(provinceCode: string): Observable<IPrice[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<IPrice[]>("https://sheets.googleapis.com/v4/spreadsheets/1l-jRdsiSxYl5GG6Yz49IPtoU5jS0V8fPUj7YD5euxWs/values/" + provinceCode + "?alt=json&key=AIzaSyCq2wEEKL9-6RmX-TkW23qJsrmnFHFf5tY", { headers: headers })
      .pipe(
        map((res: any) => {
          return res.values;
        },
          (err: HttpErrorResponse) => {
            console.log(err);
          })
      )
  }
}
