

export interface ViewCardMode {
        id: number;
        title: string;
        year: string;
        description: string;
        poster: string;
        rating: number;
        createdAt?: string;
}

export type Movies = Array<ViewCardMode>;