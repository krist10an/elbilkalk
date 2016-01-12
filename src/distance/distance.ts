import {Component} from 'angular2/core'
import {Consumption} from '../common/consumption';
import {CalcService} from '../common/consumptionservice'
import {UnitPreference} from '../common/unitpreferenceservice'
import {CarService} from '../common/carservice'

@Component({
  selector: 'app',
  template:`
    <h3>Distanse beregning</h3>

    <label>soc: </label>
    <input [(ngModel)]="cons.soc" placeholder="name"/>
    <br/>
    <label>dist: </label>
    <input [(ngModel)]="cons.distance" placeholder="name"/>
    <br/>

    <p>{{calculate()|number:'.1-1'}} {{unitName()}}</p>
  `,
  providers: [CalcService, CarService, UnitPreference]
})

export class DistanceComponent {
  public cons: Consumption = { 'soc': 100, 'distance': 150, 'consumption': 12 };
  public cs: CalcService;

  constructor(private _calcService: CalcService) {
    console.log("Inject", _calcService);
    this.cs = _calcService;
  }
  calculate() {
    return this.cs.calculate_consumption(this.cons.soc, this.cons.distance);
  }
  unitName() {
    return this.cs.unitName();
  }
}
