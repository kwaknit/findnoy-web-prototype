import { Pipe, PipeTransform } from '@angular/core';
import { flatMap } from 'lodash';

@Pipe({
    name: 'arrToString'
})
export class ArrayToStringPipe implements PipeTransform {
    transform(val: any[], children: string): string {
        if (val && val.length > 0) {
            const flattenArr: string[] = flatMap(val, (x) => x.name);

            return flattenArr.join(', ');
        }

        return `No ${children}`
    }
}