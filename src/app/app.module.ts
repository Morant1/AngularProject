import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { FilterContactComponent } from './cmps/filter-contact/filter-contact.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { NavbarComponent } from './cmps/navbar/navbar.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    FilterContactComponent,
    ContactEditComponent,
    StatisticPageComponent,
    ChartComponent,
    NavbarComponent,
    SignupPageComponent,
    TransferFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
