import { IAtom } from "./base.model";

export interface FiledCaseDocument extends IAtom {
    title: string;
    filed_case_id: number;
    filename?: string;
    path?: string;
}