import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  constructor() { }
  rememberUserAndPassword(remember:boolean | null,user:string, password:string){
    if (remember) {
       localStorage.setItem('user',user);
       localStorage.setItem('password',password);
    } else {
       localStorage.removeItem('user');
       localStorage.removeItem('password');
    }
  }
  checkLogin(){
    const user=localStorage.getItem('user');
    const password=localStorage.getItem('password');
    if(user&&password){
      return true
    }
    else{
      return false
    }

  }
}
