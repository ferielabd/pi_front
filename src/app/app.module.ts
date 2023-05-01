import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { FooterUserComponent } from './FrontOffice/footer-user/footer-user.component';
import { HeaderUserComponent } from './FrontOffice/header-user/header-user.component';
import { PreloaderComponent } from './FrontOffice/preloader/preloader.component';
import { LoanComponent } from './backOffice/loan/loan.component';
import { LoanHistoryComponent } from './backOffice/loan-history/loan-history.component';
import { HomeLoanComponent } from './FrontOffice/home-loan/home-loan.component';
import { PersonalLoanComponent } from './FrontOffice/personal-loan/personal-loan.component';
import { EducationLoanComponent } from './FrontOffice/education-loan/education-loan.component';
import { CarsLoanComponent } from './FrontOffice/cars-loan/cars-loan.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    HeaderUserComponent,
    PreloaderComponent,
    LoanComponent,
    LoanHistoryComponent,
    HomeLoanComponent,
    PersonalLoanComponent,
    EducationLoanComponent,
    CarsLoanComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
