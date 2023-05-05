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
import { ProjectComponent } from './backOffice/project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { InvestmentComponent } from './backOffice/investment/investment.component';
import { PortfolioComponent } from './backOffice/portfolio/portfolio.component';
import { ProjectFrontComponent } from './FrontOffice/project-front/project-front.component';
import { FormsModule } from '@angular/forms';
import { TestimonialsComponent } from './FrontOffice/testimonials/testimonials.component';
import { PortfoliosFrontComponent } from './FrontOffice/portfolios-front/portfolios-front.component';

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
    ProjectComponent,
    InvestmentComponent,
    PortfolioComponent,
    ProjectFrontComponent,
    TestimonialsComponent,
    PortfoliosFrontComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
