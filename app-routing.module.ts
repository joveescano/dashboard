import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path:''
  },
{
  component: UserComponent,
  path:'user'
},

{
  component: TableComponent,
  path:'table'
},

{
  component: CalendarComponent,
  path:'calendar'
},

{
  component: FormsComponent,
  path:'form'
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
