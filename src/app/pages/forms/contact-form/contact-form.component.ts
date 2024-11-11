import { ChangeDetectionStrategy, Component, signal, Input } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MediaQueryService } from '../../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';
import { urlValidator } from '../../../validators/url.validator';

import {merge} from 'rxjs';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,

  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})


export class ContactFormComponent {

  @Input()
  breakpoints = Breakpoints;
  currentBreakpoint?: string;
  currentWidth?: string;

  contactForm: FormGroup;


  errorMessageEmail = signal('');
  errorMessageTelefono = signal('');
  errorMessageEnlace = signal('');
  errorMessageToggle = signal('');

  classnametoggle: String = 'toggle';
  styleToggleItem: String = 'color: var(--mat-standard-button-toggle-text-color, var(--mat-app-on-surface));';

  constructor(private fb: FormBuilder, private mediaQueryService: MediaQueryService,) {


    this.contactForm = this.fb.group({

      nombre: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      telefono: ['', Validators.required],

      enlace: ['', Validators.required, urlValidator()],



      mensaje: ['', Validators.required],
      metodoPago: ['', Validators.required] // Asegúrate de que este control esté definido

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
      this.contactForm.get('mensaje')!.valueChanges,
      this.contactForm.get('metodoPago')!.statusChanges,
      this.contactForm.get('metodoPago')!.valueChanges,

    )
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage(""));
  }
  ngOnInit(): void {
    this.scrollToTop();

    this.mediaQueryService.breakpoint$.subscribe(() => {
      this.mediaQueryService.triggerProcesses();
      this.currentBreakpoint = this.mediaQueryService.returnBreakpoint();
    });
    this.currentWidth = this.mediaQueryService.returnWidth();
    //console.log(this.constantes.IMGBAN001);


  }


  updateErrorMessage(tipo: String) {

    switch(tipo){
      case 'email':
        const emailControl = this.contactForm.get('email');
        if (emailControl && emailControl.hasError('required')) {
          this.errorMessageEmail.set('Tienes que ingresar un valor válido');
        } else if (emailControl && emailControl.hasError('email')) {
          this.errorMessageEmail.set('No es un correo válido');
        } else {
          this.errorMessageEmail.set('');
        }
        break;


      case 'enlace':
        const enlaceControl = this.contactForm.get('enlace');
        if(enlaceControl && enlaceControl.hasError('required')) {
          this.errorMessageEmail.set('Tienes que ingresar un valor válido');
        }else if (enlaceControl && enlaceControl.hasError('invalidUrl')) {
          this.errorMessageToggle.set('No es un enlace válido');
        }else {
          this.errorMessageEmail.set('');
        }
        break;


      case 'metodoPago':
        const metodoPagoControl = this.contactForm.get('metodoPago');
        if (metodoPagoControl && metodoPagoControl.hasError('required')) {
          this.errorMessageToggle.set('Tienes que ingresar un valor válido');
        } else if (metodoPagoControl?.value == null) {
          this.errorMessageToggle.set('No es un metodo válido');
        } else {
          this.errorMessageToggle.set('');
        }
    }
  }

  updateState(){
    this.classnametoggle = 'toggle';
    this.styleToggleItem = 'color: var(--mat-standard-button-toggle-text-color, var(--mat-app-on-surface));';
    this.errorMessageToggle.set('');
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
    else {
      if(this.contactForm.get('metodoPago')?.valid == false){
        this.classnametoggle = 'invalid-form';
        this.styleToggleItem = 'color: var(--mat-form-field-error-trailing-icon-color, var(--mat-app-error));';
      }
      this.updateErrorMessage('email');
      this.updateErrorMessage('metodoPago');
    }
  }

  createWhatsappUrl(telefono: string, enlace: string, mensaje: string): string {
    const baseUrl = 'https://api.whatsapp.com/send';
    const phoneParam = `phone=${telefono}`;
    const textParam = `text=${encodeURIComponent(`enlace: ${enlace}\nMensaje: ${mensaje}`)}`;
    console.log('URL LO; '+`${baseUrl}?${phoneParam}&${textParam}`);
    return `${baseUrl}?${phoneParam}&${textParam}`;
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
