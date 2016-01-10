import {Component, View} from 'angular2/core';
/*
let styles = require('./home.css');
let template = require('./home.html');
*/

@Component({
  //directives: [CORE_DIRECTIVES],
  //template: template,
  //styles: [styles]
  template: `
<div>
<h1>Welcome</h1>
<p class="red">Red</p>
</div>`
  styles: [ `
  .red {
  color: red;
  }`
  ]
})

export class Home {
//  tall: number;
}
