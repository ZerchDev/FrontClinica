import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MedicService } from '../services/medic.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export default class ContactFormComponent {

  private fb=inject(FormBuilder);
  private router=inject(Router);
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
  create(){
    const medico=this.form.value;
    this.medicoService.create(medico)
    .subscribe(()=>{
        this.router.navigate(['/']);
      }
    );
    
  }
}
