import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpRequestService } from '../http-request.service';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  showPassword: boolean = false;
 
  form = new FormGroup({
    user: new FormControl('',[Validators.required]),
    password: new FormControl('', Validators.required),
    remember: new FormControl(false)
  });
  constructor(private httpRequestService:HttpRequestService,
              private router: Router,
              private memoryService:MemoryService) {
               
               }
  ngOnInit(): void {
      if( localStorage.getItem('remember')){
           this.form.setValue({
                user:localStorage.getItem('user') ,
                password:localStorage.getItem('password') ,
                remember: true
           });
      }
  } 
  get email() { return this.form.get('user'); }
  get password() { return this.form.get('password'); }
            
            
 
            
  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }
  access(): void {
    //logica remember user and password
    if (this.form.get('remember')?.value && this.form.get('user')?.value && this.form.get('password')) {
           this.memoryService.rememberUserAndPassword(this.form.get('remember')?.value!,this.form.get('user')?.value!,this.form.get('password')?.value!)
    }
        this.httpRequestService.loginUser(this.form.value)
           .subscribe(
               data => {
               console.log(data)
               this.router.navigate(['/home']); 
            
               }
        )
  }           
               

}
