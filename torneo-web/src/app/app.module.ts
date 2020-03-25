import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { MaterialBlockModule } from './material-block-module';
import { KitComponent } from './body/kit/kit.component';
import { VtecComponent } from './body/vtec/vtec.component';
import { AboutConfigurationComponent } from './body/about-configuration/about-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    KitComponent,
    VtecComponent,
    AboutConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialBlockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
