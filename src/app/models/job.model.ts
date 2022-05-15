export interface Job {
    key?: string | null;
    company?: string;
    title?: string;
    category?:string;
    type?:string;
    isremote?:boolean;
    link?:string;
    description?:string;
    requirements?:Array<any>;
    benefits?:Array<any>;
    date?:string;
    published?:boolean;
    locoation?:string;
}
