import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {merge} from 'rxjs';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {


  contactForm: FormGroup;

  readonly email = new FormControl('', [Validators.required, Validators.email,]);

  errorMessage = signal('');

  constructor(private fb: FormBuilder) {

    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());

    this.contactForm = this.fb.group({

      nombre: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      telefono: ['', Validators.required],

      enlace: ['', Validators.required],

      mensaje: ['', Validators.required]

    });
    merge(
      this.contactForm.get('email')!.statusChanges,
      this.contactForm.get('email')!.valueChanges,
      this.contactForm.get('nombre')!.statusChanges,
      this.contactForm.get('nombre')!.valueChanges,
      this.contactForm.get('telefono')!.statusChanges,
      this.contactForm.get('telefono')!.valueChanges,
      this.contactForm.get('enlace')!.statusChanges,
      this.contactForm.get('enlace')!.valueChanges,
      this.contactForm.get('mensaje')!.statusChanges,
      this.contactForm.get('mensaje')!.valueChanges
    )
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }
  ngOnInit(): void {}


  updateErrorMessage() {
    const emailControl = this.contactForm.get('email');
    if (emailControl && emailControl.hasError('required')) {
      this.errorMessage.set('Tienes que ingresar un valor válido');
    } else if (emailControl && emailControl.hasError('email')) {
      this.errorMessage.set('No es un correo válido');
    } else {
      this.errorMessage.set('');
    }
  }

  onSubmit(): void {

    console.log('onSubmit', this.contactForm.value);

    if (this.contactForm.valid) {
      const telefono = this.contactForm.get('telefono')?.value;
      const enlace = this.contactForm.get('enlace')?.value;
      const mensaje = this.contactForm.get('mensaje')?.value;

      const whatsappUrl = this.createWhatsappUrl('+59177731800', enlace, mensaje);
      window.open(whatsappUrl, '_blank');
    }

  }
  createWhatsappUrl(telefono: string, enlace: string, mensaje: string): string {
    const baseUrl = 'https://api.whatsapp.com/send';
    const phoneParam = `phone=${telefono}`;
    const textParam = `text=${encodeURIComponent(`enlace: ${enlace}\nMensaje: ${mensaje}`)}`;
    console.log('URL LO; '+`${baseUrl}?${phoneParam}&${textParam}`);
    return `${baseUrl}?${phoneParam}&${textParam}`;
  }
}
