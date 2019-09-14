import { IAtom, SimpleList } from "./base.model";
import { Gender } from "../_enums/gender.enum";
import { CivilStatus } from "../_enums/civil-status.enum";
import { UserType } from "../_enums/user-type.enum";

export interface User extends IAtom {
    first_name: string;
    middle_name?: string;
    last_name: string;
    birthdate: Date | string;
    birthplace: string;
    gender: Gender;
    civil_status: CivilStatus
    email: string;
    email_verified_at?: Date | string;
    type: UserType;
    contact_no: string;
    permanent_address: string;
    present_address: string;
    contact_person: string;
    contact_person_no: string;
    police_station_id?: number;
    police_station?: SimpleList;
}

export interface FieldOfficerLocation {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
}