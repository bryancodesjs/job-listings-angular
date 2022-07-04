import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from 'src/app/services/job-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  id:any = '';
  job: any = [];
  notFound = true;
  loading = true;
  titleToAscii = '';

  showLink = false;
  showEmail = false;
  showPhone = false;

  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _JobService: JobServiceService
    ) { }

  ngOnInit(): void {
    this.retrieveId();
    this.retrieveJob();
  }
  //get id from URL
  retrieveId(){
    this._activatedRoute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });
  }
  retrieveJob(){
    this._JobService.getAll().snapshotChanges().pipe(
      map(changes => changes.map( c =>
        ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe (data => {
      var toFilter = data;
      //only show the requests which arent active and arent denied
      var filtered = toFilter.filter(a => a.key == this.id);
      //console.log(filtered);
      this.job = filtered[0];
      if(this.job == undefined){
        this.notFound = true;
        this.loading = false;
      } else {
        this.notFound = false;
        this.loading = false;
        this.convertTitleToASC()
        //console.log(this.job)
        //hardcoded conditional for showing either phone, email or link
        if(this.job.phone == undefined || this.job.phone == null || this.job.phone == '') {
          if(this.job.email != '') {
            this.showEmail = true;
            //console.log('showing email...')
          } else {
            this.showLink = true;
            //console.log('showing link...')
          }
        } else {
          this.showPhone = true;
        }
      }
    });
  }
  convertTitleToASC(){
    this.titleToAscii =  this.job.title.replace(/ /g, "%20")
  }
  copyURL(){
    const str = 'https://jobcafe.me/#/job/' + this.job.key
    //this._clipboard.copy(str)
  }
}
