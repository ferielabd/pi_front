import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import { LoanComponent } from './backOffice/loan/loan.component';
import { HomeLoanComponent } from './FrontOffice/home-loan/home-loan.component';

const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
        path:'homeAdmin',
        component:BodyAdminComponent
      },
      {
        path:'loans',
        component:LoanComponent
      }
    ]

  },
  {
    path:'',
    component: AllTemplateUserComponent,
    children:[
      {
        path:'user',
        component: BodyUserComponent
      },
      {
        path:'homeLoan',
        component: HomeLoanComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
