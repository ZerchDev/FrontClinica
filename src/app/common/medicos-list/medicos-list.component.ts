import { DatePipe } from '@angular/common';
import { MedicService } from './../../services/medic.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule  } from '@angular/router';
import { Medico } from '../../model/medico.interface';

@Component({
  selector: 'app-medicos-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './medicos-list.component.html',
  styleUrl: './medicos-list.component.css'
})
export default class MedicosListComponent implements OnInit{
  private medicService=inject(MedicService)

  medicos:Medico[] = [];

ngOnInit(): void {
    this.loadAll();
}

loadAll(){
  this.medicService.list()
    .subscribe(medicos=>{
      this.medicos=medicos;
    });

}

deleteMedico(medico:Medico){              
  this.medicService.delete(medico.id)
  .subscribe(()=>{
    this.loadAll();
  });
}
}
