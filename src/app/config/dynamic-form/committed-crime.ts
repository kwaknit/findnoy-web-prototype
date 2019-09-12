import { Validators } from '@angular/forms';

export let CommittedCrime: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Name',
        name: 'name',
        placeholder: 'Enter Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Filed Case',
        name: 'filed_case_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Crime Committed',
        name: 'crime_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
]