import { bootstrap } from 'angular2/platform/browser';
import { FORM_PROVIDERS } from 'angular2/core';
//import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';

console.log("bootstrap");
import { App } from './app/app.ts';

bootstrap(
  App, [ ROUTER_PROVIDERS ]
);