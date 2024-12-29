import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCaretRight,
  faListCheck,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    RouterModule,
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    FontAwesomeModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnDestroy, OnInit {
  color: ThemePalette = 'accent';
  mobileQuery: MediaQueryList;
  menu: any;
  icon = faCaretRight;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(){
    this.listarMenu();
  }

  listarMenu() {
    this.menu = [
      { 
        id_menu: 1,
        descripcion: 'Inicio',
        cabecera: 'Inicio'.toUpperCase(),
        icon: faHome,
        estado: true,
        orden: 1,
        submenus: [
          {
            id_submenu: 1,
            id_menu: 1,
            descripcion: 'Ir',
            ruta_componente: '/sidenav',
            estado: true,
          },
        ],
      },
      {
        id_menu: 2,
        descripcion: 'Notas',
        cabecera: '',
        icon: faListCheck,
        estado: true,
        orden: 1,
        submenus: 
        [
          {
            id_submenu: 1,
            id_menu: 2,
            descripcion: 'Lista De Estudiantes',
            ruta_componente: '/sidenav/notas',
            estado: true,
          },
        ]
        
      },
    ];
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
