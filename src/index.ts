import { bootstrap } from 'angular2/platform/browser';
import { provide} from 'angular2/core';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

import { App } from './app/app';

bootstrap(
  App, [
      ROUTER_PROVIDERS,
      MATERIAL_PROVIDERS,
      provide(LocationStrategy, {useClass: HashLocationStrategy}),
  ]
);
