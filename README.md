# MyFitnessRev2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## **Project** : Angular (Full App) with Angular Material, Angularfire and NgRx

Online Ref. : Safari

### Task: Add Angular Material

1. Ref: <https://material.angular.io/guide/getting-started>
2. Run:```ng add @angular/material```
3. Add: Share/MaterialModule
4. Test with buttons (Angular Material components site)
5. NOTE - A restart of VSCode is required to see the material effects
6. NOTE - To see material effects in each component you must add to corresponding module 'MaterialModule'

### Task: Setup core and shared folders

1. core/core.module.ts

```Javascript
/**
 * core.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { NavComponent } from '../ui/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class CoreModule { }
```

1. share/share.module.ts

```Javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [],
  exports: [FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
```

1. app.module.ts

```Javascript
/**
 *  app.modue.ts
 * 
 *  for test purpose only add material.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
