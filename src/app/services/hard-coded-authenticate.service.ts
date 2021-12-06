import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticateService {

  constructor() { }

  authenticate(userName: string, password: string){
    if (userName === "abcd" && password === "1234")
    {
      sessionStorage.setItem("user", userName);
      return true;
    }

    return false;
  }

  isAuthenticated(){
    if (sessionStorage.getItem("user") != null)
      return true;
    else return false;
  }
}
