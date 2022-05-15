import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewJobComponent } from './views/new-job/new-job.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-job', component: NewJobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
