import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle-demo/lifecycle/lifecycle.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignalComponent } from './signal/signal.component';
import { NoSignalComponent } from './no-signal/no-signal.component';
import { EmpListComponent } from './emp-list/emp-list.component';

export const routes: Routes = [
    {path:'lifecycle', component:LifecycleComponent},
    {path:'parent-demo', component:ParentComponent},
    {path:'binding-with-signal', component: SignalComponent},
    {path:'binding-without-signal', component: NoSignalComponent},
    {path:'emp-list', component:EmpListComponent},
    {path:'emp-list/:id', component:EmpListComponent},
    //{path:'', redirectTo:'lifecycle', pathMatch:'full'}, //default route
    {path:'', component:LifecycleComponent, pathMatch:'full'}, //default route
    {path:'**', component: PageNotFoundComponent} //last route
  ];
