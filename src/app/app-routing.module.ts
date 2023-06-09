import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      path: '**',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }
  ]
}
