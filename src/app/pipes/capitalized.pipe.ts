import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized',
})
export class CapitalizedPipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    console.log(value);
    console.log(all);

    value = value.toLowerCase();
    let names = value.split(' ');

    if (all) {
      names = names.map( ns=> {
        return ns[0].toUpperCase() + ns.substr(1);
      })
    }else{
      names[0]= names[0][0].toLocaleUpperCase() + names[0].substr(1)
    }
    return names.join(' ')
    
  }
}
