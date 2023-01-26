import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
  transform(items: any[], filterBy: string): any {
    if (!filterBy || filterBy === 'todas') {
      return items;
    } else {
      return items.filter((item) => {
        return item.category === filterBy;
      });
    }
  }
}
