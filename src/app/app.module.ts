import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NewJobComponent } from './views/new-job/new-job.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewJobComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
