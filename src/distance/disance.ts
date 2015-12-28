/*
import {Component} from 'angular2/core'
import {Consumption} from '../common/consumption';
import {CalcService} from '../common/consumption.service.ts'
import {UnitPreference} from '../common/unitpreference.service.ts'
import {CarService} from '../common/car.service.ts'

@Component({
  selector: 'app',
  template:`
    <h1>{{title}}</h1>

    <label>soc: </label>
    <input [(ngModel)]="cons.soc" placeholder="name"/>
    <br/>
    <label>dist: </label>
    <input [(ngModel)]="cons.distance" placeholder="name"/>
    <br/>

    <p>{{calculate()|number:'.1-1'}} {{unitName()}}</p>
  `,
})

export class AppComponent {
  public title = 'Elbil kalkulator';
  public cons: Consumption = { 'soc': 100, 'distance': 150, 'consumption': 12 };
  constructor() {
    console.log("Hello");
    // Move to dependency injection
    this.cs = new CalcService(new CarService(), new UnitPreference());
  }
  calculate() {
    return this.cs.calculate_consumption(this.cons.soc, this.cons.distance);
  }
  unitName() {
    return this.cs.unitName();
  }
}
*/