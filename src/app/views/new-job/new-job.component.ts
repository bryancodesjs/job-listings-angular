import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {
  stepOne = true;
  stepTwo = false;
  jobSent = false;

  currentJob = {
    key:  '',
    title:  '',
    category: '',
    type: '',
    isremote: true,
    link: '',
    description: '',
    requirements: [{}],
    benefits: {},
    date: '',
    published: false,
    locoation: ''
  }
  benefits = {}
  //states for requirements
  newRequirement = '';
  singleRequirement = {
    name: ''
  }
  requirementsInMemory: any[] = [];

  constructor(private _jobservice: JobServiceService) { }

  ngOnInit(): void {
  }

  //set all stesp to false
  resetSteps(){
    this.stepOne = false;
    this.stepTwo = false;
    this.jobSent = false;
  }
  //go to step two
  goStepTwo(){
    this.resetSteps();
    this.stepTwo = true;
  }
  //go to step one
  goStepOne(){
    this.resetSteps();
    this.stepOne = true;
  }
  //publish new job
  publish(){
    this.resetSteps();
    this.jobSent = true;
  }
  //clear all to create a new job
  clear(){
    this.resetSteps();
    this.stepOne = true;
  }
  //job is remote or not?
  remote(ans: boolean){
    if(ans){
      this.currentJob.isremote = true;
    } else {
      this.currentJob.isremote = false;
    }
  }
  //add requirement
  addRequirement(){
    this.singleRequirement.name = this.newRequirement;
    this.newRequirement = ''; //reset new requirement
    this.requirementsInMemory.push(this.singleRequirement);
    this.singleRequirement = {name: ''}; //reset single requirement
  }
  //remove a requirement from memory
  removeRequirement(index: number){
    this.requirementsInMemory.splice(index, 1);
    //console.log(index);
  }
}
