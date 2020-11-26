import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(passw: string, active: boolean ): string {

    // if (active) {
    //   return passw;
    // } else {
    //   return '*'.repeat( passw.length )
    // }

    return (active) ? passw: '*'.repeat(passw.length)
   
  }

}
