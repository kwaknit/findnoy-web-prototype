export const PolarChoices: Option[] = [
    { id: 0, name: 'No' },
    { id: 1, name: 'Yes' }
]

export interface Option {
    id: number | null;
    name: string;
}
