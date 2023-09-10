export interface Article {
    title: string;
    date?: string;
    content: string;
    company?: string;
}

export interface Stock {
    name: string;
    code: number;
    articles: Article[];
}

export interface Theme {
    name: string;
    id: number;
}

export interface KeywordNowFormat {
    id: string;
    name: string;
}

export interface KeywordRes {
    keywords: KeywordNowFormat[];
}
export interface Keyword {
    name: string;
    themes: string[];
    id: string;
    articles: Article[];
}
