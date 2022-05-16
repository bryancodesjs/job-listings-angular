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
  constructor(private _activatedRoute: ActivatedRoute, private _JobService: JobServiceService) { }

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
      console.log(this.job);
    });
  }
}
