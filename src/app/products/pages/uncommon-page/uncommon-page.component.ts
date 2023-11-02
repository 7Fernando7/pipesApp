import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  // i18Plural
  public clients: string[] = ['Maria', 'Pedro', 'Emanuela', 'Gonzalo', 'Dani', 'Fernanda', 'Edgar', 'Gomez', 'Eduarda'];


  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '0=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.pop();
  }

  // Key Value Pipe

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  }

  // Async Pipe

  public myObservabletimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  })

}
