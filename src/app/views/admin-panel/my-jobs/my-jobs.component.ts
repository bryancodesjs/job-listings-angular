import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss']
})
export class MyJobsComponent implements OnInit {
  activeJobs: any = []
  //get the session ID from localStorage
  sessionUser = localStorage.getItem('magnetUserRef')
  //job in memory for updates
  jobInMemory: any = []

  constructor(private _JobService: JobServiceService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }
  retrieveAll(){
    this._JobService.getAll().snapshotChanges().pipe(
      map(changes => changes.map( c =>
        ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe (data => {
      var toFilter = data;
      //only show the requests which arent active and arent denied
      var filtered = toFilter.filter(a => a.author == this.sessionUser && a.deleted == false);
      //console.log(filtered);
      this.activeJobs = filtered;
      this.activeJobs.reverse();
      //console.log(this.activeJobs)
    });
  }
  changeStatus(newStatus:boolean, job:any){
    this.jobInMemory = job
    switch(newStatus){
      case true:
      if(newStatus == job.status){
        console.log('the job is already active')
      } else {
        //assign new value
        this.jobInMemory.status = true;
        //send the update
        this._JobService.update(job.key,this.jobInMemory)
      }
      break;
      case false:
        if(newStatus == job.status){
          console.log('the job is already closed')
        } else {
          console.log('job successfully closed')
          //assign new value
          this.jobInMemory.status = false;
          //send the update
          this._JobService.update(job.key,this.jobInMemory)
        }
        break;
      default:
        console.log('default')
        break;
    }
  }
  showModal = false;
  deleteJob(job: any){
    this.jobInMemory = job
    this.showModal = true;
  }
  confirmDelete(){
    this.jobInMemory.status = false;
    this.jobInMemory.deleted = true;
    this._JobService.update(this.jobInMemory.key, this.jobInMemory)
  }
  hideModal(){
    this.showModal = false;
  }
}
