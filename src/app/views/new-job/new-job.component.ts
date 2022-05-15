import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {
  stepOne = true;
  stepTwo = false;
  jobSent = false;
  constructor() { }

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
}
