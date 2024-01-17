import { Router, RouterModule } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
errorMsg: string | undefined;
  password: any;
  username: any;

constructor(private auth: AuthService, private router: Router) { }

ngOnInit(): void {

}

login() {
if(this.username.length === 0) {
  this.errorMsg = "Username is required";
} else if(this.password.length === 0) {
  this.errorMsg = "Password is required"; 
}else {
  this.errorMsg = "";
  let res = this.auth.login(this.username, this.password);
  if (res === 200) {
    this.router.navigate(['home']);
  } 
  if (res === 403) {
    this.errorMsg = "Invalid";
} 

}
username: "";
password: "";
  this.errorMsg= "";

} 
  }

