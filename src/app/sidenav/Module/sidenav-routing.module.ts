import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';

const routes: Routes = [
  { 
    path: "", component: SidebarComponent,
    children: [
      { 
        path: "",
        loadChildren: () => import('../../home/Module/home.module').then(u => u.HomeModule)
      },
      { 
        path: "notas",
        loadChildren: () => import('../../notes/Module/notes.module').then(n => n.NotesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
