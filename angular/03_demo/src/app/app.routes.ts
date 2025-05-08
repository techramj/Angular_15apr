import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle-demo/lifecycle/lifecycle.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignalComponent } from './signal/signal.component';
import { NoSignalComponent } from './no-signal/no-signal.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { NoEmpComponent } from './emp-list/no-emp/no-emp.component';
import { ObservableExample1Component } from './observers/observable-example1/observable-example1.component';
import { ObservableExample2Component } from './observers/observable-example2/observable-example2.component';
import { ObservableExample3Component } from './observers/observable-example3/observable-example3.component';
import { ObservableExample4Component } from './observers/observable-example4/observable-example4.component';
import { ObservableExample5Component } from './observers/observable-example5/observable-example5.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableExample6Component } from './observers/observable-example6/observable-example6.component';

export const routes: Routes = [
    {path:'lifecycle', component:LifecycleComponent},
    {path:'parent-demo', component:ParentComponent},
    {path:'binding-with-signal', component: SignalComponent},
    {path:'binding-without-signal', component: NoSignalComponent},
    {path:'emp-list', component:EmpListComponent},
    {path:'emp-list/:id', component:EmpListComponent},
    {path:'invalid-employee', component:NoEmpComponent},
    {path:'observable1', component: ObservableExample1Component},
    {path:'observable2', component: ObservableExample2Component},
    {path:'observable3', component: ObservableExample3Component},
    {path:'observable4', component: ObservableExample4Component},
    {path:'observable5', component: ObservableExample5Component},
    {path:'observable6', component: ObservableExample6Component},
    {path:'promise', component:PromiseComponent},
    //{path:'', redirectTo:'lifecycle', pathMatch:'full'}, //default route
    {path:'', component:LifecycleComponent, pathMatch:'full'}, //default route
    {path:'**', component: PageNotFoundComponent} //last route
  ];
