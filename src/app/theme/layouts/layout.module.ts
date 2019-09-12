import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { DefaultComponent } from '../pages/default/default.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LayoutComponent } from './layout/layout.component';

import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './dynamic-form/components/form-input/form-input.component';
import { FormSelectComponent } from './dynamic-form/components/form-select/form-select.component';
import { FormButtonComponent } from './dynamic-form/components/form-button/form-button.component';
import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field/dyanmic-field.directive';
import { FormNumberComponent } from './dynamic-form/components/form-number/form-number.component';
import { FormDateComponent } from './dynamic-form/components/form-date/form-date.component';
import { ProfileComponent } from './profile/profile.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PortletComponent } from './portlet/portlet.component';

import { IsActivePipe } from '../../_pipes/is-active.pipe';
import { ArrayToStringPipe } from '../../_pipes/array-to-string.pipe';
import { BooleanDirective } from '../../_directives/boolean.directive';
import { FormCheckboxComponent } from './dynamic-form/components/form-checkbox/form-checkbox.component';
import { ModalComponent } from './modal/modal.component';
import { CaseTypePipe } from '../../_pipes/case-type.pipe';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        FooterComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        TableComponent,
        SearchComponent,
        DynamicFormComponent,
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
        DynamicFieldDirective,
        FormNumberComponent,
        FormDateComponent,
        ProfileComponent,
        UnderConstructionComponent,
        PortletComponent,
        IsActivePipe,
        CaseTypePipe,
        ArrayToStringPipe,
        BooleanDirective,
        FormCheckboxComponent,
        ModalComponent
    ],
    exports: [
        LayoutComponent,
        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        FooterComponent,
        HrefPreventDefaultDirective,
        TableComponent,
        SearchComponent,
        DynamicFormComponent,
        DynamicFieldDirective,
        ProfileComponent,
        PortletComponent,
        IsActivePipe,
        CaseTypePipe,
        ArrayToStringPipe,
        ModalComponent
    ],
    imports: [
        CommonModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    entryComponents: [
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
        FormNumberComponent,
        FormDateComponent,
        FormCheckboxComponent
    ]
})
export class LayoutModule {
}