import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any): any {
    if (items == null) {
        return 'assets/nuevo/camera.png'
    }
    else{
      return items
    }
  }
}
