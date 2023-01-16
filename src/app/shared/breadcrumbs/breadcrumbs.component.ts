import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd,Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnDestroy{

  title:string='';
  titleSubs: Subscription;

  constructor(private router:Router) {
    this.titleSubs = this.getDataRutas()
                      .subscribe(({title})=>{
                        this.title = title;
                        document.title = `Admin Pro - ${title}`
                      })
  }
  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
  }

  getDataRutas(){
    return this.router.events
    .pipe (
      tap(console.log),
      filter( (event:any) => event instanceof ActivationEnd ),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data)
    )
  }
}
