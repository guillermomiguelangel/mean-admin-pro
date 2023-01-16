import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnDestroy {
  
  public intervalSubs : Subscription;

  constructor() {

    // this.retornaObservable()
    //   .pipe(
    //     retry(1)
    //   )
    //   .subscribe({ 
    //     next(valor){
    //       console.log('subs', valor)},
    //     error(err) {
    //       console.warn('error', err);
    //     },
    //     complete() {
    //       console.log('complete');
    //     },
    // });

    this.intervalSubs = this.retornaIntervalo()
      .subscribe({ 
        next: console.log       
    });

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    return interval(500)
          .pipe(
            // take(10),
            map( num => num + 1 ),
            filter(valor => (valor % 2 === 0)?true:false),
          );
  }

  retornaObservable(): Observable<number>{
    let i = -1;

    return new Observable<number>( observer => {

      const intervalo = setInterval(()=>{
        
        i++;
        observer.next(i)

        if(i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if(i === 2) {
          i = -1;
          clearInterval(intervalo);
          observer.error('llego a 2');
        }
        
      },1000)
    });

  }

}
