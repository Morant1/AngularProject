import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  name:string =  '';

  constructor(private userService: UserService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp() {
    this.userService.signup(this.name)
    this.goToMainPage()
  }

  goToMainPage() {
    this.router.navigateByUrl('/contact');
  }
}
