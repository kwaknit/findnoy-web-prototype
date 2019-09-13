import { Validators } from '@angular/forms';
import { PolarChoices, Gender, UserType, CivilStatus } from '../form-fields';

export let User: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Email Address',
        name: 'email',
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
        label: 'Middle Name',
        name: 'middle_name',
        placeholder: 'Enter Middle Name',
        default: null,
        optional: true
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
        type: 'date',
        label: 'Birthdate',
        name: 'birthdate',
        placeholder: 'Enter Birthdate',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'textarea',
        label: 'Birthplace',
        name: 'birthplace',
        placeholder: 'Enter Birthplace',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Gender',
        name: 'gender',
        options: Gender,
        default: 'male',
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Civil Status',
        name: 'civil_status',
        options: CivilStatus,
        default: 'single',
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Type',
        name: 'type',
        options: UserType,
        default: 'admin',
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Contact Number',
        name: 'contact_no',
        placeholder: 'Enter Contact Number',
        default: null,
        maxLength: 11,
        validators: [Validators.required]
    },
    {
        type: 'textarea',
        label: 'Permanent Address',
        name: 'permanent_address',
        placeholder: 'Enter Permanent Address',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'textarea',
        label: 'Present Address',
        name: 'present_address',
        placeholder: 'Enter Present Address',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Contact Person',
        name: 'contact_person',
        placeholder: 'Enter Contact Person',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Contact Person Number',
        name: 'contact_person_no',
        placeholder: 'Enter Contact Person Number',
        default: null,
        validators: [Validators.required]
    },
]