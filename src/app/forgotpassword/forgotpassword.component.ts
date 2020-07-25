import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  email: any;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  reset()
  {
    this.afAuth.sendPasswordResetEmail(this.email).then(()=>{
      alert('email sent');
    }).catch((_error)=>{
      console.log(_error);
    })
  }

}
