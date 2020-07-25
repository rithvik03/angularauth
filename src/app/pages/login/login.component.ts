import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  errorMessage= ""; //validation error handle

  error: {name:string,message:string} = {name: '' , message: ''}; //for firebase error handle

  constructor(private authservice: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = { name:'', message:''};
  }

  ngOnInit(): void {
  }

  login()
  {
    this.clearErrorMessage();
    if(this.validateForm(this.email,this.password))
    {
        this.authservice.loginWithEmail(this.email,this.password)
        .then(()=>{
          this.router.navigate(['/userinfo'])
        }).catch((_error)=>{
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email,password)
  {
    if(email.length === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }
    if(password.length === 0)
    {
      this.errorMessage = "please enter password";
      return false;
    }

    if(password.length < 6)
    {
      this.errorMessage = "password should be atleast 6 characters";
      return false;
    }

    this.errorMessage='';
    return true;
  }

  loginWithGoogle(){
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['/userinfo']);
}

}
