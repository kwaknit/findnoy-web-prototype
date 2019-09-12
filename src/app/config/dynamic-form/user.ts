import { Validators } from '@angular/forms';
import { PolarChoices } from '../form-fields';

export let User: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Email Address',
        name: 'email_address',
        placeholder: 'Enter Email Address',
        default: null,
        validators: [Validators.required, Validators.email]
    },
    {
        type: 'input',
        label: 'First Name',
        name: 'first_name',
        placeholder: 'Enter First Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Last Name',
        name: 'last_name',
        placeholder: 'Enter Last Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Mobile Number',
        name: 'mobile_number',
        placeholder: 'Enter Mobile Number',
        default: null,
        maxLength: 11,
        optional: true
    },
    {
        type: 'number',
        label: 'Year Graduated',
        name: 'year_graduated',
        placeholder: 'Enter Year Graduated',
        default: null,
        isNumberFormat: false,
        maxLength: 4,
        optional: true
    },
    {
        type: 'select',
        label: 'Are you teaching?',
        name: 'is_teaching',
        options: PolarChoices,
        default: 0,
    },
    {
        type: 'input',
        label: 'School attended',
        name: 'school',
        placeholder: 'Enter School attended',
        default: null,
        optional: true
    },
]