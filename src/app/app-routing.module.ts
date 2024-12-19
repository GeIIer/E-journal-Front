import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/auth.guard";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'login',
      loadChildren: () =>
        import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    {
      path: 'home',
      loadChildren: () =>
        import('./pages/home/home.module').then((m) => m.HomeModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'journal',
      loadChildren: () =>
        import('./pages/journal/journal.module').then((m) => m.JournalModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'subjects',
      loadChildren: () =>
        import('./pages/subjects/subjects.module').then((m) => m.SubjectsModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'groups',
      loadChildren: () =>
        import('./pages/groups/groups.module').then((m) => m.GroupsModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'groups/:id',
      loadChildren: () =>
        import('./pages/groups/group-details/group-details.module').then((m) => m.GroupDetailsModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'teachers',
      loadChildren: () =>
        import('./pages/teachers/teachers.module').then((m) => m.TeachersModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'students/:id',
      loadChildren: () =>
        import('./pages/students/students.module').then((m) => m.StudentsModule),
      canActivate: [AuthGuard],
    },
    {
      path: 'teacher/:id',
      loadChildren: () =>
        import('./pages/teachers/teacher-details/teacher-details.module').then((m) => m.TeacherDetailsModule),
      canActivate: [AuthGuard],
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
