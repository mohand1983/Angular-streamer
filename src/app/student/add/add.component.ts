import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public form: FormGroup=new FormGroup({})

  constructor(
    private _formBuilder:FormBuilder,
    private _service:StudentService
  ) { }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
      lastName:[
        '',//Default value
        [
          Validators.required
        ]// Validators function to add to this field
      ],
      firstName:[
        '',//Default value
        [
          Validators.required
        ]// Validators function to add to this field
      ],
      email:[
        '',
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        ]
      ],
      phoneNumber:[
        '',
        [

        ]
      ],
      login:[
        '',
        [
          Validators.required
        ]
      ],
      password:[
        '',
        [
          Validators.required
        ]
      ]
    })
  }
  public get c():{[key:string]:AbstractControl}{
    return this.form.controls
  }
  public onSubmit(): void{
    this._service.add(this.form.value)
  }

}
