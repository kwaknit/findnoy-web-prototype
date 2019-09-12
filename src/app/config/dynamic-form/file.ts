import { Validators } from '@angular/forms';

export let File: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'File Name',
        name: 'name',
        placeholder: 'Enter File Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Description',
        name: 'description',
        placeholder: 'Enter Description',
        default: null,
        optional: true
    },
    {
        type: 'input',
        label: 'Video Link',
        name: 'video_link',
        placeholder: 'Enter Video Link',
        default: null,
        optional: true
    },
    {
        type: 'select',
        label: 'Category',
        name: 'category_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Subcategory',
        name: 'subcategory_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Contributor',
        name: 'user_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
]