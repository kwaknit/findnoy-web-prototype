import { Directive, ElementRef } from '@angular/core';
@Directive({
    selector: '[boolean]'
})
export class BooleanDirective {
    constructor(Element: ElementRef) {
        console.log(Element);
    }
}