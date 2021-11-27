import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticateService } from '../services/hard-coded-authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "abcd";
  password: string = '';
  isInvalidUser: boolean = false;
  constructor(private router: Router, private authenticateService: HardCodedAuthenticateService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.authenticateService.authenticate(this.userName, this.password)) {
      this.isInvalidUser = false;
      this.router.navigate(['/welcome']);
    }
    else this.isInvalidUser = true;

  }

}
