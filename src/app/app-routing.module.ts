import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { LoanComponent } from './backOffice/loan/loan.component';
import { ProjectComponent } from './backOffice/project/project.component';
import { InvestmentComponent } from './backOffice/investment/investment.component';
import { portfolioService } from './backOffice/portfolio/portfolio.service';
import { PortfolioComponent } from './backOffice/portfolio/portfolio.component';

const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
        path:'admin',
        component:BodyAdminComponent
      },
      {
        path:'loans',
        component:LoanComponent
      }
      ,{
        path:'Project', component: ProjectComponent

      },
      {
        path:'Investment', component: InvestmentComponent

      },
      {
        path:'Portfolio', component: PortfolioComponent

      }
    ]

  },
  {
    path:'',
    component: AllTemplateUserComponent,
    children:[
      {
        path:'homeUser',
        component: BodyUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
