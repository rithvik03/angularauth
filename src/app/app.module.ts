import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserinfoComponent,
    ForgotpasswordComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firabase),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
