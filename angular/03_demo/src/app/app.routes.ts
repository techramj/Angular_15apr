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
import { EmployeesComponent } from './employees/employees.component';
import { EmpEditComponent } from './employees/emp-edit/emp-edit.component';
import { EmpCreateComponent } from './employees/emp-create/emp-create.component';
import { Demo1Component } from './forms/demo1/demo1.component';
import { Demo2Component } from './forms/demo2/demo2.component';
import { Demo3Component } from './forms/demo3/demo3.component';
import { Demo4Component } from './forms/demo4/demo4.component';
import { Demo5Component } from './forms/demo5/demo5.component';

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
    {path:'employees', component: EmployeesComponent},
    {path:'employees/:id/edit', component: EmpEditComponent},
    {path:'emp-create', component:EmpCreateComponent},
    {path:'promise', component:PromiseComponent},
    {path:'form1', component: Demo1Component},
    {path:'form2', component: Demo2Component},
    {path:'form3', component: Demo3Component},
    {path:'form4', component: Demo4Component},
    {path:'form5', component: Demo5Component},
    //{path:'', redirectTo:'lifecycle', pathMatch:'full'}, //default route
    {path:'', component:EmployeesComponent, pathMatch:'full'}, //default route
    {path:'**', component: PageNotFoundComponent} //last route
  ];
