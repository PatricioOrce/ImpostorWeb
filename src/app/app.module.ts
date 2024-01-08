import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SetupComponent } from './components/setup/setup.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxSpinnerModule.forRoot(),
    CommonModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
