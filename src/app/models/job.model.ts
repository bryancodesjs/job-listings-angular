export interface Job {
    key?: string | null;
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
