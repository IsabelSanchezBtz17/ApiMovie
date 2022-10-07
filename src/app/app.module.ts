import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptor/token.interceptor';
import { InformationDialogComponent } from './components/information-dialog/information-dialog.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationDialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
