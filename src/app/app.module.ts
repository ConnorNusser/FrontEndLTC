import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPageComponent } from './project-page/project-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
