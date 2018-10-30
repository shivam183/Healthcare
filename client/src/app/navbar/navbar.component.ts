import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile: any) => {
      this.user = profile.user
    },
      err => {
        return false;
      }
    )
  }

  onLogoutClick() {
    this.authService.logout();
    this.user = null;
    this.flashMessage.show("Logged Out Sucessfully", { cssClass: 'alert-success text-center', timeout: 3000 })

  }

  onHomeClick() {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/dashboard']);
      return true;

    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
