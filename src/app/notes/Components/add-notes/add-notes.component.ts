import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Asignatures } from '../../Models/Asignatures';
import { CommonModule } from '@angular/common';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNotesComponent {
  readonly dialog = inject(MatDialog);
  estudianteData: any;
  formNotes: FormGroup;
  selectedAsignature: string = '';

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  valueNote = 0;

  asignatures: Asignatures[] = [
    { value: 'Matemáticas-0', name: 'Matemáticas' },
    { value: 'Ingles-1', name: 'Ingles' },
    { value: 'Español-2', name: 'Español' },
    { value: 'Filosofia-3', name: 'Filosofia' },
    { value: 'Ciencias-4', name: 'Ciencias Naturales' },
  ];

  constructor(private route: ActivatedRoute) {
    this.formNotes = new FormGroup({
      asignature: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.estudianteData = {
        estudiante: params['estudiante'],
        identificacion: params['identificacion'],
      };
    });
  }

  validateForm(): boolean {
    if (this.selectedAsignature && this.valueNote) {
      return true;
    } else {
      return false;
    }
  }

  addNote() {
    this.mostrarAlerta();
  }

  mostrarAlerta() {
    Swal.fire({
      title: 'Agregar Notas',
      text: 'Se ha registrado la nota correctamente',
      icon: 'success',
      confirmButtonText: 'Cerrar',
    });
  }
}
