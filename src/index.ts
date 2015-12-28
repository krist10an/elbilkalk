import { bootstrap } from 'angular2/platform/browser';
import { FORM_PROVIDERS } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/core';

import { App } from './app/app';

bootstrap(
  App,
  [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
  ]
);