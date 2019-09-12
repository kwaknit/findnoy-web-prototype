import { Validators } from '@angular/forms';
import { PoliceStationNumber } from '../form-fields';

export let PoliceStation: any[] = [
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
        label: 'Station #',
        name: 'number',
        options: PoliceStationNumber,
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Address',
        name: 'address',
        placeholder: 'Enter Address',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Contact Number',
        name: 'contact_no',
        placeholder: 'Enter Contact Number',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Chief Police',
        name: 'chief_police',
        placeholder: 'Enter Chief Police',
        default: null,
        validators: [Validators.required]
    },
]