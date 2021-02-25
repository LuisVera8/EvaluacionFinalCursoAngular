import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correoInvalido=false;


  form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  // isValidEmail(mail) { 
  //   return /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
  // }

  get f(){
    return this.form.controls;
  }

  submit(){
    const datos=this.form.value;
    console.log("Intentas ingresar con estos datos"+JSON.stringify(datos));
  }

  // valida(event){
  //   const correo=event.target.value;
  //   const esvalido=this.isValidEmail(correo);
  //   if(esvalido){
  //     this.correoInvalido=false;
  //   }else{
  //     this.correoInvalido=true
  //   }
  //   console.log("validando_correo"+esvalido);
  // }

}
