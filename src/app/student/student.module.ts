import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HttpClientModule} from  '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class StudentModule { }
