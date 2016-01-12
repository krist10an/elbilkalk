import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from '../home/home';
import {DistanceComponent} from '../distance/distance'

@Component({
  selector: 'app'
})
@View({
  template:`
<div class="container">
  <nav>
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['Distance']">Distance</a>
  </nav>
  
  <router-outlet></router-outlet>
</div>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
//  { path: '/',       redirectTo: '/home' },
  { path: '/',   as: 'Home',   component: Home },
  { path: '/distance',   as: 'Distance',   component: DistanceComponent },
])
export class App {
}
