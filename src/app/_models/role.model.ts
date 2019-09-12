import { IAtom, IName } from "./base.model";
import { AccessType } from "../_enums/access-type.enum";

export interface Role extends IAtom, IName {
    access_type: AccessType
}