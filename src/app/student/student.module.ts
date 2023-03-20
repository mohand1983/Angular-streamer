import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HttpClientModule} from  '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InitialsPipe } from './pipes/initials.pipe';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    ListComponent,
    InitialsPipe,
    AddComponent
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
