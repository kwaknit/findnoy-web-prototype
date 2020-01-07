import { Validators } from '@angular/forms';

export let CommittedCrime: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Criminal Name',
        name: 'name',
        placeholder: 'Criminal Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Case #',
        name: 'filed_case_id',
        options: null,
        default: null,
        validators: [Validators.required],
        createUrl: '/filed-cases/create'
    },
    {
        type: 'select',
        label: 'Crime Committed',
        name: 'crime_id',
        options: null,
        createUrl: '/committed-crimes/create',
        default: null,
        validators: [Validators.required]
    },
]