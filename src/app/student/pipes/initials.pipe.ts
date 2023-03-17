import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from '../interfaces/i-student';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: IStudent, ...args: unknown[]): unknown {
    return value.firstName!.charAt(0) + value.lastName.charAt(0);
  }

}
