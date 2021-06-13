import { Component, OnInit } from '@angular/core';
import { Item, Book, Song } from '../objects/item';
import { ListService } from "../list.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    top3songs: Song[] = [];
    top3books: Book[] = [];
    constructor(private ListService: ListService) { }

    ngOnInit(): void {
        this.ListService.songTop3Subject.subscribe((data) => {
            this.top3songs = data;
        });
        this.ListService.bookTop3Subject.subscribe((data) => {
            this.top3books = data;
        })
    }

}
