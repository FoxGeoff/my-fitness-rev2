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

```Javascript
/**
 * CORE MODULE
 * Core folder should contain singleton
 * services shared throughout app
 *
 * Services that are specific to a feature can
 * go in the feature's folder
 *
 * Example: LoggingService, ErrorService,
 * DataSerice
 */

/**
 * SHARED MODULE: Reusable components, pipes and directives
 *
 * Shared folder should contain reusable
 * components, pipes and directives
 *
 * Example: CalendarComponent,
 * AutoCompleteComponent
 */
```

### Task: Setup flex layout

1 Ref: <https://github.com/angular/flex-layout>

### **DO NOT RUN THIS**

1. Run:```npm i -s @angular/flex-layout @angular/cdk```
2. Run:```npm install @angular/flex-layout@latest --save```

### **DO RUN THIS - flex-layout must match cli rev**

1. Run```npm install @angular/flex-layout@^9.0.0-beta.30 --save```
2. Add FlexLayoutModule to material.module.ts
3. Ref: <https://stackblitz.com/edit/flex-layout-material-seed?file=package.json>
4. Ref: <https://github.com/angular/flex-layout>
5. Test with code from the example <https://material.angular.io/components/button/overview>

```Javascript
/**
 * Test code for flex layout
 * change <div fxFlex="90%"> to <div fxFlex="60%">
 */
<div fxLayout="row" fxLayoutAlign="space-around start">
  <div fxFlex="90%">
    ....
  </div>
</div>
```

### Task: Add the UI navigtion

### Task: Update nav items

### Task: Add fake AuthService

### Task: Add The Signup Form

### Task: Add user interface (model)

### Task: Add Training components

1. TODO: splitup into lazy loading
2. Ref code: github/AiClient2020Rev3
