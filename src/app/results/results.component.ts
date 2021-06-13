import { Component, OnInit } from '@angular/core';
import {Book, Song} from "../objects/item";
import {ListService} from "../list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
    type: string = '';
    searchTerm: string = '';
    resultsBook: Book[] =  [];
    resultsSong: Song[] =  [];

    constructor(private _listService: ListService,  private _route: ActivatedRoute) { }

    ngOnInit(): void {
        this.type = this._route.snapshot.paramMap.get('type') || 'both';
        this.searchTerm = decodeURI(this._route.snapshot.paramMap.get('searchTerm') || '');
        this._listService.songReady.subscribe((ready) => {
            if(ready) {
                this.search(this.searchTerm);

            }
        });
        this._listService.bookReady.subscribe((ready) => {
            if(ready) {
                this.search(this.searchTerm);

            }
        })
    }

    searchBook(searchTerm: string) {
        this.resultsBook = this._listService.searchBook(searchTerm) as Book[];

    }
    searchSong(searchTerm: string) {
        this.resultsSong = this._listService.searchSong(searchTerm) as Song[];

    }
    search(searchTerm: string) {
        switch (this.type) {
            case 'book':
                this.searchBook(searchTerm)
                break;
            case 'song':
                this.searchSong(searchTerm);
                break;
            case 'both':
            default:
                this.searchSong(searchTerm);
                this.searchBook(searchTerm);

        }

    }

}
