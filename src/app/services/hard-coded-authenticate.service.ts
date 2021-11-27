import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticateService {

  constructor() { }

  authenticate(userName: string, password: string){
    if (userName === "abcd" && password === "1234")
      return true;

    return false;
  }
}
