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
import { AboutComponent } from './views/about/about.component';
import { JobComponent } from './views/job/job.component';
import { CookiesComponent } from './views/shared/cookies/cookies.component';
import { MyJobsComponent } from './views/admin-panel/my-jobs/my-jobs.component';
import { RegistrationFormComponent } from './views/registration-form/registration-form.component';
import { QuestionsComponent } from './views/registration-form/questions/questions.component';
//hashed routes fix
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { StringFilterPipe } from './pipes/string-filter.pipe';
import { TermsComponent } from './views/terms/terms.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
//clipboard
import { ClipboardModule } from 'ngx-clipboard';
import { BackofficeComponent } from './views/backoffice/backoffice.component';
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
    CoursesComponent,
    AboutComponent,
    JobComponent,
    CookiesComponent,
    MyJobsComponent,
    RegistrationFormComponent,
    QuestionsComponent,
    StringFilterPipe,
    TermsComponent,
    PrivacyComponent,
    BackofficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ClipboardModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
