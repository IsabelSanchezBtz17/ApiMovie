import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/shared/material.module';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptor/token.interceptor';
import { InformationDialogComponent } from './components/information-dialog/information-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    InformationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,


  ],
  

  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass:TokenInterceptor, multi: true
     }
],

  bootstrap: [AppComponent]
})
export class AppModule { }
