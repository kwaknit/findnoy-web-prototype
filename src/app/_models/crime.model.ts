import { IAtom, IName } from "./base.model";

export interface Crime extends IAtom, IName {
    description?: string;
}