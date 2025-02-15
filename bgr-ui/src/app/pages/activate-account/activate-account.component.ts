import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationControllerService} from '../../services/services/authentication-controller.service';

@Component({
  selector: 'app-activate-account',
  standalone: false,

  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {

  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationControllerService
  ) {


  }

  redirectToLogin() {
    this.router.navigate(['login'])
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  private confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next:() => {
        this.message = "Your account has been activated. \n You can now log into the website."
      },
      error:() =>{
        this.message = 'Token has been expired or invalid'
        this.submitted = true;
        this.isOkay = false;
      }
    });

  }
}
