export const PolarChoices: Option[] = [
    { id: 0, name: 'No' },
    { id: 1, name: 'Yes' }
]

export const Gender: Option[] = [
    { id: 'male', name: 'Male' },
    { id: 'female', name: 'Female' }
]

export const CivilStatus: Option[] = [
    { id: 'single', name: 'Single' },
    { id: 'married', name: 'Married' },
    { id: 'widowed', name: 'Widowed' },
    { id: 'legally_separated', name: 'Legally Separated' }
]

export const UserType: Option[] = [
    { id: 'admin', name: 'Administrator' },
    { id: 'field_officer', name: 'Field Officer' },
    { id: 'civilian', name: 'Civilian' },
]

export const PoliceStationNumber: Option[] = [
    { id: '1', name: '1' },
    { id: '2', name: '2' },
    { id: '3', name: '3' },
    { id: '4', name: '4' },
    { id: '5', name: '5' },
    { id: '6', name: '6' },
    { id: '7', name: '7' },
    { id: '8', name: '8' },
    { id: '9', name: '9' },
    { id: '10', name: '10' },
    { id: '11', name: '11' },
]

export interface Option {
    id: any;
    name: string;
}