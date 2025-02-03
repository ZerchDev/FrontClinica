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
    return this.http.get<Medico>('http://localhost:8081/api/buscarmedicoporid/${id}');
  }
  create(medico:Medico){
    return this.http.post<Medico>('http://localhost:8081/api/guardarmedico',medico);
  }
  update(id:number,medico:Medico){
  return this.http.put<Medico>('http://localhost:8081/api/actualizarMedico/${id}',medico);
  }
  delete(id:number){
    return this.http.delete<Medico>('http://localhost:8081/api/actualizarMedico/${id}');
    }
}
