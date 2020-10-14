import { Observable, Observer } from "rxjs";
const myObserver: Observer<any> = {
  next: x => {
    if (!isNaN(x)) {
      console.log(x + 10);
    } else {
      console.log(`'${x}' no es numero`);
    }
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

myObservable.subscribe(myObserver);
myObservable2.subscribe(myObserver);
