import {Component, Input} from 'angular2/core'
import {Consumption} from '../common/consumption';
import {CalcService} from '../common/consumptionservice'
import {UnitPreference} from '../common/unitpreferenceservice'
import {CarService} from '../common/carservice'

@Component({
  selector: 'soc-view',
  template: `
    <h4>soc</h4>
    val:{{soc}}
    <input [(ngModel)]="soc" placeholder="name"/>
    `
})
class SocComp {
  @Input() soc: string;
}


@Component({
  selector: 'app',
  templateUrl: 'distance/distance.html',
  providers: [CalcService, CarService, UnitPreference],
  directives: [SocComp]
})

export class DistanceComponent {
  public cons: Consumption = { 'soc': 100, 'distance': 150, 'consumption': 12 };

  constructor(private _calcService: CalcService) {
  }
  calculate() {
    return this._calcService.calculate_consumption(this.cons.soc, this.cons.distance);
  }
  unitName() {
    return this._calcService.unitName();
  }
}
