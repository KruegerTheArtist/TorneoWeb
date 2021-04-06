import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { KitComponent } from './body/kit/kit.component';
import { VtecComponent } from './body/vtec/vtec.component';
import { AboutConfigurationComponent } from './body/about-configuration/about-configuration.component';


const routes: Routes = [
  {path: '', component: BodyComponent, pathMatch: 'full'},
  {path: 'body', component: BodyComponent},
  {path: 'kit', component: KitComponent},
  {path: 'vtec', component: VtecComponent},
  {path: 'about-configuration', component: AboutConfigurationComponent}

//  { path: 'settings', component: SettingsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
