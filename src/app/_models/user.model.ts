import { IAtom } from "./base.model";

export interface User extends IAtom {
    first_name: string;
    last_name: string;
    mobile_number: string;
    email_address: string;
    year_graduated: number;
    is_teaching: boolean;
    school?: string;
    role?: any;
}