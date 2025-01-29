import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Medico } from '../model/medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  private http = inject(HttpClient);

  list(){
    return this.http.get<Medico[]>('http://localhost:8081/api/mostrarmedicosnormal');
  }
  get(id:number){
    return this.http.get<Medico>('http://localhost:8081/api//{id}')
  }
  create(medico:any){
    return this.http.post<Medico>('http://localhost:8081/api/guardarmedico',medico);
  }
}
