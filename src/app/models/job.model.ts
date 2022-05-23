export interface Job {
    key?: string | null;
    author?:string | null;
    visits?: number;
    company?: string;
    title?: string;
    category?:string;
    type?:string;
    isremote?:boolean;
    link?:string;
    email?:string;
    description?:string;
    requirements?:Array<any>;
    benefits?:Array<any>;
    date?:string;
    published?:boolean;
    locoation?:string;
    status?:boolean;
}
