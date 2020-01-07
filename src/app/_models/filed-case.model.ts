import { IAtom } from "./base.model";
import { CaseType } from "../_enums/case-type.enum";
import { Gender } from "../_enums/gender.enum";
import { CaseStatus } from "../_enums/case-status.enum";

export interface FiledCase extends IAtom {
    title: string;
    description: string;
    type: CaseType;
    full_name: string;
    gender: Gender;
    last_seen_date?: Date;
    last_seen_place: string;
    status: CaseStatus;
    issued_at: Date;
    closed_at?: Date;
    assigned_to_user_id: number;
    privacy: boolean;
    assigned_officer: {
        id: number;
        first_name: string;
        last_name: string;
    }
}