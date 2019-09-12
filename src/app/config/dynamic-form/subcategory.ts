import { Validators } from '@angular/forms';

export let Subcategory: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Subcategory Name',
        name: 'name',
        placeholder: 'Enter Subcategory Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Parent Category',
        name: 'category_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
]