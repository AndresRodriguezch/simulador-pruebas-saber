import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from '../Components/list-students/list-students.component';
import { AddNotesComponent } from '../Components/add-notes/add-notes.component';

const routes: Routes = [
  {
    path: '',
    component: ListStudentsComponent,
  },
  {
    path: 'addnotes',
    component: AddNotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
