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

  requirementsInMemory: any[] = [];
  BenefitsInMemory: any[] = [];
  deleted = false;

  newBenefit = '';
  singleBenefit = {
    name: ''
  }
  //states for requirements
  newRequirement = '';
  singleRequirement = {
    name: ''
  }

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
  
  showEditModal = false;
  
  editJob(job:any){
    this.jobInMemory = job;
    this.showEditModal = true;
    //place job requirements to requirementsInMemory
    this.requirementsInMemory = job.requirements;
    //place job benefits in BenefitsInMemory
    this.BenefitsInMemory = job.benefits;
  }
  closeEditModal(){
    this.showEditModal = false;
    this.jobInMemory = [];
    this.jobSent = false;
  }
  confirmDelete(){
    this.jobInMemory.status = false;
    this.jobInMemory.deleted = true;
    this._JobService.update(this.jobInMemory.key, this.jobInMemory)
    this.deleted = true;
  }
  hideModal(){
    this.showModal = false;
    this.deleted = false;
  }
  //remover beneficio
  removeBenefit(index: number){
    this.BenefitsInMemory.splice(index, 1);
  }

  addBenefit(){
    if(this.newBenefit != ''){
      this.singleBenefit.name = this.newBenefit;
      this.newBenefit = ''; //reset new benefit
      this.BenefitsInMemory.push(this.singleBenefit);
      this.singleBenefit = {name: ''}; //reset single benefit
    }
  }

  //add requirement
  addRequirement(){
    if(this.newRequirement != ''){
      this.singleRequirement.name = this.newRequirement;
      this.newRequirement = ''; //reset new requirement
      this.requirementsInMemory.push(this.singleRequirement);
      this.singleRequirement = {name: ''}; //reset single requirement
    }
  }
  //remove a requirement from memory
  removeRequirement(index: number){
    this.requirementsInMemory.splice(index, 1);
  }
  jobSent = false;
  //publish new job
  update(){
    //add publication date
    this.jobInMemory.requirements = this.requirementsInMemory;
    this.jobInMemory.benefits = this.BenefitsInMemory;
    this._JobService.update(this.jobInMemory.key, this.jobInMemory);
    this.jobSent = true;
    console.log('job updated');
  }
}
