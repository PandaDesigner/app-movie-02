import {commons} from "../commons.ts";

export class Utils {
    static shortElipseString(str: string, maxLength: number): string {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    }
    static formatDate(date: string): string {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        };
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('en-US', options);
    }

    static getUrlImage(path: string): string {
        return `${commons.IMAGE_URL}${path}`;
    }

    static getDateNow(): string {
        const date = Date.now();
        return date.toString();
    }

    static getUrlMovie(query:string, page?: number): string {
        return `${commons.API_URL}?query=${query}&api_key=${commons.API_KEY}&page=${page}&language=es-ES`;
    }

    static getYearShort(date: string): string {
        return date.split("-")[0];
    }
}