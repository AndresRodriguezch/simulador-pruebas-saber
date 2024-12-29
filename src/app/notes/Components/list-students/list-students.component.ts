import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { Estudiantes } from '../../Models/Estudiantes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBan, faBook } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.scss',
})
export class ListStudentsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = [
    'estudiante',
    'identificacion',
    'notas',
    'registrar',
  ];
  dataSource = new MatTableDataSource<Estudiantes>(ESTUDIANTES_DATA);

  faBook = faBook;
  faBan = faBan;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }
}

const ESTUDIANTES_DATA: Estudiantes[] = [
  {
    estudiante: 'Juan Pérez',
    identificacion: '1001234567',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'María López',
    identificacion: '1009876543',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Carlos Ramírez',
    identificacion: '1005678901',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Ana Sánchez',
    identificacion: '1004567890',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Luis Fernández',
    identificacion: '1002345678',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Sofía Martínez',
    identificacion: '1006789012',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Jorge Castillo',
    identificacion: '1007890123',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Lucía Gómez',
    identificacion: '1008901234',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Diego Torres',
    identificacion: '1009012345',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Gabriela Morales',
    identificacion: '1003456789',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Andrea Cruz',
    identificacion: '1004567801',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Ricardo Vargas',
    identificacion: '1005678902',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Carmen Reyes',
    identificacion: '1001234789',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Pedro León',
    identificacion: '1002345890',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Laura Herrera',
    identificacion: '1003456891',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Samuel Romero',
    identificacion: '1004567892',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Natalia Rojas',
    identificacion: '1005678903',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Martín Ortega',
    identificacion: '1006789014',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Camila Espinoza',
    identificacion: '1007890125',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Esteban Paredes',
    identificacion: '1008901236',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Valeria Fuentes',
    identificacion: '1009012347',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Hugo Velasco',
    identificacion: '1003456788',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Diana Medina',
    identificacion: '1004567899',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Mario Quintana',
    identificacion: '1005678900',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Paula Carrillo',
    identificacion: '1006789011',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Sebastián Campos',
    identificacion: '1007890122',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Elena Navarro',
    identificacion: '1008901233',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Mateo Domínguez',
    identificacion: '1009012344',
    notas: false,
    registrar: true,
  },
  {
    estudiante: 'Isabela Silva',
    identificacion: '1001234576',
    notas: true,
    registrar: false,
  },
  {
    estudiante: 'Rodrigo Méndez',
    identificacion: '1002345677',
    notas: false,
    registrar: true,
  },
];
