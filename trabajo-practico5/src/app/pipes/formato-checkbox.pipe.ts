import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoCheckbox'
})
export class FormatoCheckboxPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value){
      return "Si";
    }
    return "No";
  }

}
