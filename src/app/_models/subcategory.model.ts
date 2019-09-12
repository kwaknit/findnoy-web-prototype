import { IAtom, IName, SimpleList } from "./base.model";

export interface Subcategory extends IAtom, IName {
    category_id: number;
    category: SimpleList
}