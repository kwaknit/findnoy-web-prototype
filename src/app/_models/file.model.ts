import { IAtom, IName, SimpleList } from "./base.model";

export interface File extends IAtom, IName {
    description?: string;
    video_link?: string;
    thumbnail?: string;
    file_name?: string;
    file_extension?: string;
    download_count?: number;
    category_id: number;
    subcategory_id: number;
    user_id: number;
    category: SimpleList;
    subcategory: SimpleList;
    user: SimpleList;
}