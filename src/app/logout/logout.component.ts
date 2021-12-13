import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticateService } from '../services/hard-coded-authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: HardCodedAuthenticateService) { }

  ngOnInit(): void {
    this.service.onLogout();
  }

}
