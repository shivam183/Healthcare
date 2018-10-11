import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import{Router} from '@angular/router';
import{FlashMessagesService} from 'angular2-flash-messages';
import{ValidateService} from '../validate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private validate:ValidateService) { }

  ngOnInit() {
  }


  onLoginSubmit(){
    const user={
      username:this.username,
      password:this.password
    }

    if(!this.validate.validateLogin(user)){
      this.flashMessage.show('All Fields are Required',{cssClass:'alert-danger',timeout:3000})
      return false;
    }

    this.authService.authenticateUser(user).subscribe((data:any)=>{
      console.log(data);
      if(data.success)
      {
          this.authService.storeUserData(data.token,data.user)
          this.flashMessage.show('You are now logged in',{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['/dashboard']);
          
      }
      else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/login']);
      }

    })
  }
}
