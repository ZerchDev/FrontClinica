import { MedicService } from './../../services/medic.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicos-list',
  standalone: true,
  imports: [],
  templateUrl: './medicos-list.component.html',
  styleUrl: './medicos-list.component.css'
})
export default class MedicosListComponent implements OnInit{
  private medicService=inject(MedicService)

  medicos:any[] = [];

ngOnInit(): void {
    this.medicService.list()
    .subscribe((medicos:any)=>{
      this.medicos=medicos;
    });
}
}
