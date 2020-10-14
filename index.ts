import { observable, Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";

const myObserver: Observer<any> = {
  next: x => {
    console.log(x);
  },
  error: err => console.error("fallaste", err),
  complete: () => console.log("termine")
};

const myObservable = new Observable(subscriber => {
  subscriber.next("hola");
  subscriber.next(10);
  subscriber.next(20);
  subscriber.error(50);
  subscriber.next(50);
});

const myObservable2 = new Observable(suscriber => {
  suscriber.complete();
});

// myObservable.subscribe(myObserver);
// myObservable2.subscribe(myObserver);

// myObservable
//   .pipe(
//     map((r: any) => {
//       if (!isNaN(r)) return 10;
//       return r;
//     })
//   )
//   .subscribe(myObserver);

const mpipe = myObservable.pipe(
  filter((r: any) => !isNaN(r)),
  map((r: any) => {
    return r;
  })
);
