import {Component, View} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/core';

import {Home} from '../home/home.ts';

//let template = require('./app.html');


@Component({
  selector: 'app'
})
@View({
//  template: template,
  template:`
<div class="container">
  <router-outlet></router-outlet>
</div>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
  { path: '/',       redirectTo: '/home' },
  { path: '/home',   as: 'Home',   component: Home },
])
export class App {
  constructor(public router: Router) {
  }
}