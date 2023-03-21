import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './student/add/add.component';
import { ListComponent } from './student/list/list.component';
import { UpdateComponent } from './student/update/update.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  public static readonly routes:Routes = [
    {
      path: '', // Mean : http://localhost:4200
      redirectTo: 'dashboard', // Redirection to another Route object
      pathMatch: 'full' //Mean Anguler read the whole URI instead of first matching occ
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path:'student/list',
      component:ListComponent
    },
    {
      path: 'student/add', 
      component: AddComponent
    },
    {
      path: 'student/:id/update',// :id => sera remplacé par l'id student à l'excution
      component:UpdateComponent
    },
    {
      path: 'course',    
      loadChildren: () => import('./course/course.module')
      .then((m) => m.CourseModule)
    },
    {
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }
  ]
}