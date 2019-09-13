import { Validators } from '@angular/forms';
import { PoliceStationNumber, CaseType, CaseStatus, Gender, PolarChoices } from '../form-fields';

export let FiledCase: any[] = [
    {
        type: 'hidden',
        label: 'ID',
        name: 'id'
    },
    {
        type: 'input',
        label: 'Title',
        name: 'title',
        placeholder: 'Enter Title',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'textarea',
        label: 'Description',
        name: 'description',
        placeholder: 'Enter Description',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Case Type',
        name: 'type',
        options: CaseType,
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'input',
        label: 'Respondent',
        name: 'full_name',
        placeholder: 'Enter Full Name',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Respondent Gender',
        name: 'gender',
        options: Gender,
        default: 'male',
        optional: true
    },
    {
        type: 'date',
        label: 'Last Seen Date',
        name: 'last_seen_date',
        placeholder: 'Enter Last Seen Date',
        default: null,
        optional: true
    },
    {
        type: 'input',
        label: 'Last Seen Place',
        name: 'last_seen_place',
        placeholder: 'Enter Last Seen Place',
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Case Status',
        name: 'status',
        options: CaseStatus,
        default: 'open',
        validators: [Validators.required]
    },
    {
        type: 'hidden',
        label: 'Issued At',
        name: 'issued_at',
        placeholder: 'Enter Issued At',
        default: new Date().toJSON().slice(0,10),
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Assigned Officer',
        name: 'assigned_to_user_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Police Station',
        name: 'police_station_id',
        options: null,
        default: null,
        validators: [Validators.required]
    },
    {
        type: 'select',
        label: 'Is Private?',
        name: 'privacy',
        options: PolarChoices,
        default: 0,
        validators: [Validators.required]
    },
]