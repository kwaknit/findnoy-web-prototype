import { Validators } from '@angular/forms';

export let Category: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Category Name',
        name: 'name',
        placeholder: 'Enter Category Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Parent Module',
        name: 'module_id',
        options: [
            { id: 1000, name: 'Tips' },
            { id: 2000, name: 'Tools' },
            { id: 3000, name: 'Templates' }
        ],
        default: null,
        validators: [Validators.required]
    },
]