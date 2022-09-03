export interface Item {
	genres: string[];
	id: number;
	overview:  string;
	poster:  string;
	release_date: Date
	title:  string;    
}

export interface ItemResponse {
    hits: Array<Item>;
    query: string;
}


