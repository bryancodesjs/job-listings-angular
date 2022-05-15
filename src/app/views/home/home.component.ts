import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeJobs: any = [];
  todaysDate = new Date().toLocaleDateString();
  
  constructor(private _JobService: JobServiceService) { }

  ngOnInit(): void {
    this.retrieveAll();
    console.log(this.todaysDate);
  }

  retrieveAll(){
    this._JobService.getAll().snapshotChanges().pipe(
      map(changes => changes.map( c =>
        ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe (data => {
      var toFilter = data;
      //only show the requests which arent active and arent denied
      var filtered = toFilter.filter(a => a.published == true);
      //console.log(filtered);
      this.activeJobs = filtered;
      this.activeJobs.reverse();
    });
  }
}
