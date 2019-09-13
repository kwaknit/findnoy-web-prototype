import { Directive, Input, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormNumberComponent } from '../form-number/form-number.component';
import { FormDateComponent } from '../form-date/form-date.component';
import { FormCheckboxComponent } from '../form-checkbox/form-checkbox.component';
import { FormTextareaComponent } from '../form-textarea/form-textarea.component';

const components = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    number: FormNumberComponent,
    date: FormDateComponent,
    checkbox: FormCheckboxComponent,
    textarea: FormTextareaComponent
};

@Directive({
    selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit {
    @Input() config;
    @Input() group: FormGroup;

    component;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    ngOnInit() {
        const component = components[this.config.type];
        if (component) {
            
            if (this.config.type === 'select') {
                this.config.options = this.config.options ? this.config.options : [];
            }

            const factory = this.resolver.resolveComponentFactory<any>(component);
            this.component = this.container.createComponent(factory);
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    }
}