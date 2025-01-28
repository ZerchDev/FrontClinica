import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  private http = inject(HttpClient);

  list(){
    return this.http.get('http://localhost:8081/api/mostrarmedicosnormal');
  }
  create(medico:any){
    return this.http.post('http://localhost:8081/api/guardarmedico',medico);
  }
}
