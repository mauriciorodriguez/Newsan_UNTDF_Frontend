import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProvince } from '../interfaces/IProvince';
import { IProvinceApi } from '../interfaces/IProvinceApi';

@Injectable({
  providedIn: 'root'
})
export class ProvincesDataService {

  constructor(private http: HttpClient) { }

  getProvinces(): Observable<IProvince>[] {
    return this.http.get<IProvinceApi[]>('./assets/provinces.json').pipe(
      map((res: IProvinceApi[]) => {
        const provinces: IProvince[] = [];
        res.forEach(province => {
          provinces.push({ ...province, name: province.nombre, url: province.api });
        });
        return provinces;
      })
    );
  }

}
