import { Routes } from '@angular/router';
import { ButtonBannerComponent } from './button-banner/button-banner.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpEditComponent } from './employees/emp-edit/emp-edit.component';

export const routes: Routes = [
    {path: 'button-banner', component:  ButtonBannerComponent },
    {path:'employees', component: EmployeesComponent},
    {path:'employees/:id/edit', component: EmpEditComponent},
    {path:'', redirectTo:'button-banner', pathMatch:'full'}, //default route
];
