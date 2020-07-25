import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [

  { path:'', redirectTo:'/login' ,pathMatch: 'full'},
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'userinfo', component:UserinfoComponent },
  { path: 'forgotpassword', component:ForgotpasswordComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
