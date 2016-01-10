import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from '../home/home.ts';

@Component({
  selector: 'app'
})
@View({
  template:`
  <h2>Hello Typescript</h2>
<div class="container">
  <router-outlet></router-outlet>
</div>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
//  { path: '/',       redirectTo: '/home' },
  { path: '/',   as: 'Home',   component: Home },
])
export class App {
}
