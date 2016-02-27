import {Component, View} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from '../home/home';
import {DistanceComponent} from '../distance/distance'
import {MATERIAL_DIRECTIVES, SidenavService, Media} from 'ng2-material/all';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.html',
  directives: [ ROUTER_DIRECTIVES, NgClass, MATERIAL_DIRECTIVES ]
})
@RouteConfig([
//  { path: '/',       redirectTo: '/home' },
  { path: '/',   as: 'Home',   component: Home },
  { path: '/distance',   as: 'Distance',   component: DistanceComponent },
])
export class App {
  constructor(public sidenav:SidenavService) {
  }

  clicked(message: string) {
    alert(message);
  }
  hasMedia(breakSize:string):boolean {
    return Media.hasMedia(breakSize);
  }
  open(name:string) {
    this.sidenav.show(name);
  }
  close(name:string) {
    this.sidenav.hide(name);
  }
}
