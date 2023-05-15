import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18n select
  public name:string='Manuel';
  public gender:'male'|'female'='male';
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name='Meliza';
    this.gender='female';
  }

  //i18n plural
  public clients:string[]=['Maria','Pedro','Luis', 'Fernando', 'Melissa','Eduardo', 'Natalia']
  public clientsMap={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 personas esperando.',
    'other':'tenemos # cliente esperando.',
  }
  deleteClient():void{
    this.clients.pop();
  }

  //keyValue Pipe
  public person={
    name:'Manuel',
    age:'24',
    address:'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer:Observable<number>=interval(2000);

  public promiseValue:Promise<string>=new Promise( (resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa');
    },3500);
  })
}
