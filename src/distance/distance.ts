import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Component, Input} from 'angular2/core'
import {Consumption} from '../common/consumption';
import {CalcService} from '../common/consumptionservice'
import {UnitPreference} from '../common/unitpreferenceservice'
import {CarService} from '../common/carservice'

@Component({
  selector: 'result-view',
  template: `
    <md-whiteframe class="md-whiteframe-7dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout layout-align="center center">
    <h4>{{name}} </h4>
    <span>{{result}} {{unit}}</span>
    </md-whiteframe>
  
    `
  directives: [MATERIAL_DIRECTIVES]
})
class ResultComponent {
  @Input() name: string;
  @Input() result: string;
  @Input() unit: string;
}


@Component({
  selector: 'app',
  templateUrl: 'distance/distance.html',
  providers: [CalcService, CarService, UnitPreference],
  directives: [ResultComponent, MATERIAL_DIRECTIVES]
})

export class DistanceComponent {
  meny: any = [
    {id: 0, name: "Avstand", icon: "car",  soc: 1, dist: 0, consum: 1, unit: "km"},
    {id: 1, name: "Forbruk", icon: "plug", soc: 1, dist: 1, consum: 0, unit: this._calcService.unitName()},
    {id: 2, name: "Lading",  icon: "bolt", soc: 0, dist: 1, consum: 1, unit: "%"},
    ];
  selected: any = 0;
  cons: Consumption;

  constructor(private _calcService: CalcService) {
    this.cons = new Consumption(100, 12, 150);
  }

  current() {
    return this.meny[this.selected];
  }

  calculate() {
    if this.selected == 0 {
      return this._calcService.calculate_distance(this.cons.soc, this.cons.consumption);
    } else if (this.selected == 1) {
      return this._calcService.calculate_consumption(this.cons.soc, this.cons.distance);
    } else if (this.selected == 2) {
      return this._calcService.calculate_charge(this.cons.distance, this.cons.consumption);
    } else {
      console.log("Wtf")
    }
  }
  unitName() {
    return this.current().unit;
  }
}
