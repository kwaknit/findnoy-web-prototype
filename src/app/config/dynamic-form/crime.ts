import { Validators } from '@angular/forms';

export let Crime: any[] = [
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
        type: 'textarea',
        label: 'Description',
        name: 'description',
        placeholder: 'Enter Description',
        default: null,
        optional: true
    },
]