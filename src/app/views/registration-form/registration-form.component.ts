import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private _registration: RegistrationService) { }

  //objeto en memoria
  nuevoRegistro = {
    //plan can be 0 (standard) or 1 (plus)
    plan: 0,
    //tipo can be 0 (empresa) or 1 (agency/independent recruiter)
    tipo: 0,
    //status can be 0 (pending), 1 (active) or 2 (deleted)
    status: 0,
    nombre: '',
    rnc: '',
    website: '',
    linkedin: '',
    location: '',
    email: '',
    phone: '',
    registrationDate: ''
  }

  //variables para directivas
  loading = false
  error = false;
  esEmpresa = true;
  sent = false;

  //variables de inputs
  registrationDate = new Date().toLocaleDateString();
  
  //variables de errores
  hasName = true;
  hasRNC = true;
  hasEmail = true;
  hasPhone = true;
  hasLocation = true;
  hasLinkedin = true;
  
  ngOnInit(): void {
    window.scroll(0,0)
  }

  tipoRegistro(type: number){
    switch(type){
      case 0:
        this.nuevoRegistro.tipo = 0
        this.esEmpresa = true
        this.hasLinkedin = true;
        console.log(this.registrationDate)
        break;
      case 1:
        this.nuevoRegistro.tipo = 1
        this.nuevoRegistro.rnc = ''
        this.esEmpresa = false
        break;
      default:
        this.nuevoRegistro.tipo = 0
        this.esEmpresa = true
        break;
    }
  }

  validateForm(){
    this.resetValidationErrors();
    if(this.nuevoRegistro.nombre == '') {
      this.hasName = false;
    }
    if(this.esEmpresa && this.nuevoRegistro.rnc == '') {
      this.hasRNC = false;
    }
    if(this.nuevoRegistro.email == '') {
      this.hasEmail = false;
    }
    if(this.nuevoRegistro.phone == '') {
      this.hasPhone = false;
    }
    if(!this.esEmpresa && this.nuevoRegistro.linkedin == '') {
      this.hasLinkedin = false;
    }
    if(this.nuevoRegistro.location == '') {
      this.hasLocation = false;
    }
    this.sendForm();
  }
  sendForm(){
    if(this.esEmpresa && this.hasName && this.hasRNC && this.hasEmail && this.hasLocation){
      this.nuevoRegistro.registrationDate = this.registrationDate;
      this._registration.create(this.nuevoRegistro);
      this.sent = true;
    } else if (!this.esEmpresa && this.hasName && this.hasEmail && this.hasLinkedin){
      this.nuevoRegistro.registrationDate = this.registrationDate;
      this._registration.create(this.nuevoRegistro);
      this.sent = true;
    } else {
      console.log('error')
    }
  }
  resetValidationErrors(){
    this.hasName = true;
    this.hasRNC = true;
    this.hasEmail = true;
    this.hasPhone = true;
    this.hasLocation = true;
    this.hasLinkedin = true;
  }
}
