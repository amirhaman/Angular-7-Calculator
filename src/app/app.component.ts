import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loveangular';
}

console.log('here');

const observable = new Observable(function subscribe(subscriber) {
  subscriber.next('hi')
});

document.addEventListener('click', function() {
  observable.subscribe(x => console.log(x));
});

const observable2 = new Observable(function subscribe(subscriber) {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4); // Is not delivered because it would violate the contract
});

observable2.subscribe(x => console.log(x));


