import { IAtom, IName } from "./base.model";

export interface CommittedCrime extends IAtom, IName {
    filed_case_id: number;
    crime_id: number;
    filed_case: {
        id: number;
        title: string;
    };
    crime: {
        id: number;
        name: string;
    }
}