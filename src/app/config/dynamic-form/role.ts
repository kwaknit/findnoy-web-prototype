import { Validators } from '@angular/forms';

export let Role: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Role',
        name: 'name',
        placeholder: 'Enter Role',
        default: null,
        validators: [Validators.required]
    },
]