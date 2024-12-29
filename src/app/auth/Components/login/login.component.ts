import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly dialog = inject(MatDialog);
  public login!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.login = this.fb.group({
      identificacion: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  isValidField(field: string): boolean | null {
    const control = this.login.get(field);
    return control ? control.invalid && control.touched : false;
  }

  getFieldError(field: string): string | null {
    if (!this.login.controls[field]) return null;

    let errors = this.login.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;

        case 'email':
          return `El Email no es valido`;
      }
    }
    return null;
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  validateSpace(event: any) {
    var key = window.event ? event.which : event.keyCode;
    if (key == 32) {
      event.preventDefault();
    }
  }

  validateLogin() {
    let identificacion = this.login.get('identificacion')?.value;
    let password = this.login.get('password')?.value;

    if (identificacion === '1234567899' && password === '12345678') {
      this.router.navigate(['/sidenav']);
    } else {
      this.mostrarAlerta();
    }
  }

  mostrarAlerta() {
    Swal.fire({
      title: 'Login',
      text: 'Usuario o contraseña incorrectos',
      icon: 'error',
      confirmButtonText: 'Cerrar',
    });
  }
}
