import {Component, View, CORE_DIRECTIVES} from 'angular2/core';
/*
let styles = require('./home.css');
let template = require('./home.html');
*/

@Component({
  selector: 'home'
})
@View({
  directives: [CORE_DIRECTIVES],
  //template: template,
  //styles: [styles]
  template: `
<div>
<h1>Welcome</h1>
<p class="red">Red</p>
</div>`
})
export class Home {
}
