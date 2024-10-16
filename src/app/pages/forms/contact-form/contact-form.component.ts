import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;



  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      nombre: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      telefono: ['', Validators.required],

      asunto: ['', Validators.required],

      mensaje: ['', Validators.required]

    });
  }
  ngOnInit(): void {}






  onSubmit(): void {

    console.log('onSubmit', this.contactForm.value);

    if (this.contactForm.valid) {
      const telefono = this.contactForm.get('telefono')?.value;
      const asunto = this.contactForm.get('asunto')?.value;
      const mensaje = this.contactForm.get('mensaje')?.value;

      const whatsappUrl = this.createWhatsappUrl('+59177731800', asunto, mensaje);
      window.open(whatsappUrl, '_blank');
    }

  }
  createWhatsappUrl(telefono: string, asunto: string, mensaje: string): string {
    const baseUrl = 'https://api.whatsapp.com/send';
    const phoneParam = `phone=${telefono}`;
    const textParam = `text=${encodeURIComponent(`Asunto: ${asunto}\nMensaje: ${mensaje}`)}`;
    console.log('URL LO; '+`${baseUrl}?${phoneParam}&${textParam}`);
    return `${baseUrl}?${phoneParam}&${textParam}`;
  }
}
