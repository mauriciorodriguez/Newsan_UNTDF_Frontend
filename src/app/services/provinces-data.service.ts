import { provideCloudflareLoader } from '@angular/common';
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

  private baseUrl: string = "./assets/api"

  getProvinces() {
    return this.http.get(this.baseUrl + '/provincias.json').pipe(
      map((res: any) => {
        let provinces = res.map((prov: any) => {
          let aux = {
            ...prov,
            url: prov.api,
            name: prov.nombre,
          }
          delete aux.api;
          delete aux.nombre;
          return aux;
        })
        return provinces;
      })
    );
  }

  getProvinceById(id: number) {
    return this.http.get(this.baseUrl + '/provincias.json')
      .pipe(
        map((provinces: any) => {
          let provinceResult = null;
          for (let province of provinces) {
            if (province.id == id) {
              provinceResult = province;
              break;
            }
          }
          return provinceResult;
        })
      );
  }

}
