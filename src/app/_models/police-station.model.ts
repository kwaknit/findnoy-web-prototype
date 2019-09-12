import { IAtom, IName } from "./base.model";

export interface PoliceStation extends IAtom, IName {
    number: string;
    address: string;
    contact_no: string;
    chief_police: string;
}