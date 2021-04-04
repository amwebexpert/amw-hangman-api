// USER api
export interface User {
    name: string;
    email: string;
}

//  TEXT api
export interface ApiCategory {
    id: number;
    uuid: string;
    langcode: string;
    name: string;
}

export interface ApiText {
    id: number;
    uuid: string;
    original: string;
    normalized: string;
}
