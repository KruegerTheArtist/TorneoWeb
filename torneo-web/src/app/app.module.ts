import { BrowserModule } from '@angular/platform-browser';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';


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
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialBlockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
