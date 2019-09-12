import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'caseType'
})
export class CaseTypePipe implements PipeTransform {
    transform(val: string): string {
        let formattedString = '';

        switch (val) {
            case 'wanted_criminal':
                formattedString = 'Wanted Criminal';
                break;
            case 'missing_person':
                formattedString = 'Missing Person';
                break;
            case 'carnapped_vehicle':
                formattedString = 'Carnapped Vehicle';
                break;
            default:
                break;
        }

        return formattedString
    }
}