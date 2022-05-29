import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private dbPath = '/Users';
  modelRef: AngularFireList<Registration>;

  constructor(private db: AngularFireDatabase) { 
    this.modelRef = db.list(this.dbPath);
  }

  //create a new registration request on Firebase
  create(Registration: Registration){
    return this.modelRef.push(Registration);
  }

}
