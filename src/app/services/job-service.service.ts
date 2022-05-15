import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  
  private dbPath = '/jobs';
  modelRef: AngularFireList<Job>;
  
  constructor(private db: AngularFireDatabase) { 
    this.modelRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Job> {
    return this.modelRef;
  }
  
  create(Job: Job){
    return this.modelRef.push(Job);
  }

  update(key: string, value: any): Promise<void> {
    return this.modelRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.modelRef.remove(key);
  }
}
