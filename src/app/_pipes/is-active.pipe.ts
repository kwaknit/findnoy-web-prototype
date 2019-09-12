import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isActive'
})
export class IsActivePipe implements PipeTransform {
    transform(val: Date | string): string {
        return (val === null) ? 'Active' : 'Inactive';
    }
}