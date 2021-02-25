import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern("[A-Za-z]+$"), Validators.minLength(3)]),
    lastname: new FormControl('',[Validators.required, Validators.pattern("[A-Za-z]+")]),
    username: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.pattern("[0-9]{10}")]),
    password: new FormControl('',[Validators.required]),
    cfpassword: new FormControl('',[Validators.required])
  },{
    validators:this.validaPassIguales
  }
  )

  get f(){
    return this.form.controls;
  }v

  ngOnInit(): void {
  }

  validaPassIguales(group:FormGroup){
    const password=group.controls.password.value;
    const passwordConfirmation=group.controls.cfpassword.value;
    return password==passwordConfirmation?null:{passwordNotEqual:true};
  }

  submit(){
    const datos=this.form.value;
    console.log("Intentas ingresar con estos datos"+JSON.stringify(datos));
  }

}
