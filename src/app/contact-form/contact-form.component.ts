import { Medico } from './../model/medico.interface';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  form=this.fb.group(
    {
      nombre:['',[Validators.required]],
      apellidopaterno:['',[Validators.required]],
      apellidomaterno:['',[Validators.required]],
      telefono:['',[Validators.required]],
      cedula:['',[Validators.required]],
      email:['',[Validators.required]],
      especialidad:['',[Validators.required]],
      activo:['',[Validators.required]]
    }
  );

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id');

    if(id){
      this.medicoService.get(parseInt(id)).subscribe
      (medico=>
        {console.log(medico)
      })
    }
  }

  
  create(){
    const medico=this.form.value;
    this.medicoService.create(medico)
    .subscribe(()=>{
        this.router.navigate(['/']);
      }
    );
    
  }
}
