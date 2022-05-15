import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NewJobComponent } from './views/new-job/new-job.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './views/not-found/not-found.component';
//FIREBASE MODULES
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { CoursesComponent } from './views/courses/courses.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewJobComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AdminPanelComponent,
    NotFoundComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
