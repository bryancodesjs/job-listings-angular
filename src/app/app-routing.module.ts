import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { CoursesComponent } from './views/courses/courses.component';
import { HomeComponent } from './views/home/home.component';
import { JobComponent } from './views/job/job.component';
import { LoginComponent } from './views/login/login.component';
import { NewJobComponent } from './views/new-job/new-job.component';
import { RegistrationFormComponent } from './views/registration-form/registration-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-job', component: NewJobComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin-panel', component: AdminPanelComponent},
  {path: 'courses', component: CoursesComponent},
  {path:'about', component: AboutComponent},
  {path: 'job/:id', component: JobComponent},
  {path: 'registration-form', component: RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
