import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/job-service.service';
import { map } from 'rxjs/operators';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeJobs: any = [];
  todaysDate = new Date().toLocaleDateString();
  //pagination variables
  p: number = 1;
  public filter: string = '';
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    screenReaderPaginationLabel: 'Paginación',
    screenReaderPageLabel: 'Página',
    screenReaderCurrentLabel: `Estas en la página`
  };

  backgroundCode = 0;
  constructor(private _JobService: JobServiceService) { }
  @HostListener("scroll", ['$event'])
  logScroll($event: Event){
    if(window.pageYOffset > 80){
      (document.getElementById('nav') as HTMLElement).className = 'fixed-top animate__animated animate__fadeInDown navbar navbar-expand-lg navbar-dark dark-bg'
    } else {
      (document.getElementById('nav') as HTMLElement).className = 'navbar navbar-expand-lg navbar-dark dark-bg'
    }
  }

  ngOnInit(): void {
    this.retrieveAll();
    this.chooseRandomImage();
  }
  //function which helps show a random background
  chooseRandomImage() {
    this.backgroundCode = Math.floor(Math.random() * (8-1 + 1)) + 1;
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
