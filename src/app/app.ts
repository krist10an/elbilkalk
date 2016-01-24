import {Component, View} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from '../home/home';
import {DistanceComponent} from '../distance/distance'

@Component({
  selector: 'app'
})
@View({
  template:`
<div class="container">
  <ul class="nav nav-tabs">

  <li role="presentation"><a [routerLink]="['Home']">Home</a></li>
  <li role="presentation"><a [routerLink]="['Distance']">Distance</a></li>
  </ul>
  <router-outlet></router-outlet>
</div>
  `,
/*
  <li role="presentation" [class.active]="router.isRouteActive(router.generate(['/Home']))"><a [routerLink]="['Home']">Home</a></li>
  <nav>
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['Distance']">Distance</a>
  </nav>
*/
  directives: [ ROUTER_DIRECTIVES, NgClass ]
})
@RouteConfig([
//  { path: '/',       redirectTo: '/home' },
  { path: '/',   as: 'Home',   component: Home },
  { path: '/distance',   as: 'Distance',   component: DistanceComponent },
])
export class App {
}
