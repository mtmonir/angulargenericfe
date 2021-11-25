import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "abcd";
  password: string = '';
  isInvalidUser: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    if (this.userName === 'abcd' && this.password === '1234') {
      this.isInvalidUser = false;
      this.router.navigate(['/welcome']);
    }
    else this.isInvalidUser = true;

  }

}
