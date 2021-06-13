import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Book, Song } from "./objects/item";
// const list = import('./data/data.json');
@Injectable({
    providedIn: 'root'
})
export class ListService {
    songList10Subject = new BehaviorSubject<Song[]>([]);
    bookList10Subject = new BehaviorSubject<Book[]>([]);
    songTop3Subject = new BehaviorSubject<Song[]>([]);
    bookTop3Subject = new BehaviorSubject<Book[]>([]);
    songList: Array<Song> = [];
    bookList: Array<Book> = [];
    bookReady = new BehaviorSubject<boolean>(false);
    songReady = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) {
        this.fetchSongs();
        this.fetchBooks();
    }
    fetchSongs() {
        this.http.get('https://raw.githubusercontent.com/majanord/fakerest/master/song.json').toPromise().then((res) => {
            this.songList = res as Array<Song>;
            this.randomSongs();
            this.top3songs();
            this.songReady.next(true);
        });
    }
    fetchBooks() {
        this.http.get('https://raw.githubusercontent.com/majanord/fakerest/master/book.json').toPromise().then((res) => {
            this.bookList = res as Array<Book>;
            this.randomBooks();
            this.top3books();
            this.bookReady.next(true);
        });
    }

    top3songs() {
        const list: Song[] = [...this.songList];
        list.sort((el1, el2) => {
            return el2.year - el1.year;
        });
        this.songTop3Subject.next(list.slice(0, 3));

    }
    top3books() {
        const list: Book[] = [...this.bookList];
        list.sort((el1, el2) => {
            return el2.year - el1.year;
        });
        this.bookTop3Subject.next(list.slice(0, 3));

    }

    fetchTop3() {
        this.top3songs();
        this.top3books();

    }

    randomBooks() {
        this.bookList10Subject.next(this.get10random<Book>(this.bookList));
    }

    randomSongs() {
        this.songList10Subject.next(this.get10random<Song>(this.songList));
    }

    getSong(id: string): Song | undefined {
        return this.songList.find((el: Song) => {
            return el.id === id;
        })
    }

    getBook(id: number): Book | undefined {
        return this.bookList.find((el: Book) => {
            return el.id === id;
        })
    }

    get10random<T>(array: T[]) {
        const shuffled: T[] = [...array];
        shuffled.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    }

    searchBook(searchTerm: string) {
        return this.bookList.filter((book: Book) => {

            return (new Book(book)).search(searchTerm);
        })
    }

    searchSong(searchTerm: string) {
        return this.songList.filter((song: Song) => {

            return (new Song(song)).search(searchTerm);
        })
    }
}
