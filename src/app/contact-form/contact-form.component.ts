import { Medico } from './../model/medico.interface';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MedicService } from '../services/medic.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export default class ContactFormComponent implements OnInit{
  

  private fb=inject(FormBuilder);
  private router=inject(Router);
  private route=inject(ActivatedRoute);
  private medicoService=inject(MedicService);

  form?:FormGroup;
  medico?:Medico;

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');

    if(id){
      this.medicoService.get(parseInt(id))
      .subscribe(medico=>{
        this.medico=medico;
        this.form=this.fb.group({
          nombre:[medico.nombre,[Validators.required]],
          apellidopaterno:[medico.apellidopaterno,[Validators.required]],
          apellidomaterno:[medico.apellidopaterno,[Validators.required]],
          telefono:[medico.telefono,[Validators.required]],
          cedula:[medico.cedula,[Validators.required]],
          email:[medico.email,[Validators.required]],
          especialidad:[medico.especialidad,[Validators.required]],
          activo:[medico.activo,[Validators.required]],

        });
      })
    }else{
      this.form=this.fb.group({
        nombre:['',[Validators.required]],
        apellidopaterno:['',[Validators.required]],
        apellidomaterno:['',[Validators.required]],
        telefono:['',[Validators.required]],
        cedula:['',[Validators.required]],
        email:['',[Validators.required]],
        especialidad:['',[Validators.required]],
        activo:['',[Validators.required]],

      });
    }
  }

  
  create(){
    const medicoForm=this.form!.value;
    
    if(this.medico){
      this.medicoService.update(this.medico.id,medicoForm)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    }else{
      this.medicoService.create(medicoForm)
      .subscribe(()=>{
        this.router.navigate(['/']);
      });
    }
  }
}
