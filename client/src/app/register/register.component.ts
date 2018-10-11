import { Component, OnInit } from '@angular/core';
import{ValidateService} from'../validate.service';
import{FlashMessagesService} from'angular2-flash-messages';
import{AuthService} from '../auth.service';
import{Router} from '@angular/router';
import{map} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password:String;
  constructor(
    private validateService:ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }

  onRegisterSubmit()
  {
    const user={
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }

    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show("All Fields are required",{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Please enter a valid Email Address",{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe((data:any)=>{
      if(data.success)
      {
        this.flashMessage.show("You are now Registered and Can LogIN",{cssClass:'alert-success',timeout:5000});
        this.router.navigate(['/login']);
      
      }
      else
      {
        this.flashMessage.show("Something Went Wrong",{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/register']);
      }
      
    })
  }
}
