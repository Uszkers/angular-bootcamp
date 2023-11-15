import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  interval,
  map,
  Observer,
  of,
  Subject,
  Subscription,
  take,
  throwError,
} from 'rxjs';

@Component({
  selector: 'abc-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss'],
})
export class RxjsDemoComponent implements OnInit, OnDestroy {
  private sub: Subscription | undefined;
  private counter = 0;

  /**
   * Obiekt typu Observer<T> możemy przekazać do metody `subscribe()` observable'a, żeby nasłuchiwać
   * na jego emisje.
   * - next - nasłuchujemy na nadchodzącą wartość
   * - complete - nasłuchujemy na zakończenie "życia" observable'a
   * - error - nasłuchujemy na błąd
   */
  private readonly observer: Observer<string | number> = {
    next: (value) => {
      console.log('received value: ', value);
    },
    complete: () => {
      console.log('source completed');
    },
    error: (err) => {
      console.log('received error', err);
    },
  };

  /**
   * Przykłady różnych observabli i operacji jakie można na nich wykonywać
   */
  private readonly intervalObservable = interval(1000); // kolejne liczby naturalne (od 0) co 1000 ms
  private readonly singleValueObservable = of('just me'); // pojedyncza emisja i complete
  private readonly errorObservable = throwError(
    () => new Error('something went wrong')
  ); // pojedynczy Error
  // przykład transformacji:
  private transformedObservable = interval(1000).pipe(
    filter((x) => x % 2 === 0),
    map((x) => x ** 2),
    take(5) // bierzemy tylko 5 emisji i potem robimy complete
  );
  private transformedWithErrorObservable = this.transformedObservable.pipe(
    map((x) => {
      if (x === 16) {
        throw new Error('surprise!');
      }
      return x;
    })
  );

  private readonly subject = new Subject<number>();
  private readonly behaviorSubject = new BehaviorSubject<number>(42);

  ngOnInit(): void {
    // żeby nie robić "szumu" w konsoli, wszystkie są domyślnie zacommentowane
    // this.intervalObservable.subscribe(this.observer);
    // this.singleValueObservable.subscribe(this.observer);
    // this.errorObservable.subscribe(this.observer);
    // this.transformedObservable.subscribe(this.observer);
    // this.transformedWithErrorObservable.subscribe(this.observer);
    // this.sub = this.intervalObservable.subscribe(this.observer);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      console.log('unsubscribing...');
      this.sub.unsubscribe();
    }
  }

  addSubscription(): void {
    console.log('adding subscription...');
    // this.transformedObservable.subscribe(this.observer);
    // this.subject.subscribe(this.observer);
    this.behaviorSubject.subscribe(this.observer);
  }

  emitValue(): void {
    // this.subject.next(++this.counter);
    this.behaviorSubject.next(++this.counter);
  }
}
