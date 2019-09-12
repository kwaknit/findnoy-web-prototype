import { IAtom, IName, SimpleList } from "./base.model";

export interface Category extends IAtom, IName {
    module_id: number;
    module: SimpleList;
    subcategories?: {
        name: string;
        id: number;
        category_id: number;
    }[]
}