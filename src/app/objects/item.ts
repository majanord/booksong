export interface IBook {
    id: number,
    title: string,
    author: string,
    genre: string,
    year: number
}

export interface ISong {
    id: string,
    title: string,
    artist: string,
    length: string,
    genre: string,
    year: number

}

export class Item<T> {

    constructor() {

    }

    search(searchTerm: string): boolean {
        return Object.values(this).find((value: any) => {
            if (typeof value === 'string') {
                return value.includes(searchTerm);
            }
            return false;
        }) !== undefined;
    }
}

export class Book extends Item<IBook> implements IBook {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    constructor(book: IBook) {
        super();
        this.id = book.id;
        this.title = book.title;
        this.author = book.author;
        this.genre = book.genre;
        this.year = book.year;
    }

    search(searchTerm: string): boolean {
        return super.search(searchTerm);
    }
}

export class Song extends Item<ISong> implements ISong {
    id: string;
    title: string;
    artist: string;
    length: string;
    genre: string;
    year: number;
    constructor(song: ISong) {
        super();
        this.id = song.id;
        this.title = song.title;
        this.artist = song.artist;
        this.length = song.length;
        this.genre = song.genre;
        this.year = song.year;
    }

    search(searchTerm: string): boolean {
        return super.search(searchTerm);
    }
}
