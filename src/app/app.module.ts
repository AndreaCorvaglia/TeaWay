import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { BannerComponent } from './banner/banner.component';
import { PopUpComponent } from './pop-up/pop-up.component';

const appRoutes: Routes = [
  { path: 'log-in', component: LogInComponent , children: [
  { path: 'sign-in', component: SignInComponent}]},
  { path: '', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    BannerComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
