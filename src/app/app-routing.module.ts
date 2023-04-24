import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'journal',
      loadChildren: () =>
        import('./pages/journal/journal.module').then((m) => m.JournalModule),
    },
    {
      path: 'subjects',
      loadChildren: () =>
        import('./pages/subjects/subjects.module').then((m) => m.SubjectsModule),
    },
    {
      path: 'groups',
      loadChildren: () =>
        import('./pages/groups/groups.module').then((m) => m.GroupsModule),
    },
    {
      path: 'groups/:id',
      loadChildren: () =>
        import('./pages/groups/group-details/group-details.module').then((m) => m.GroupDetailsModule),
    },
    {
      path: 'teachers',
      loadChildren: () =>
        import('./pages/teachers/teachers.module').then((m) => m.TeachersModule),
    },
    {
      path: 'students/:id',
      loadChildren: () =>
        import('./pages/students/students.module').then((m) => m.StudentsModule),
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
