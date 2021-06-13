import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";
import {ActivatedRoute} from "@angular/router";
import {Book, Song} from "../objects/item";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    book: Book|undefined = undefined;
    song: Song|undefined = undefined;
    type: string|null = '';
  constructor(private listService: ListService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
      const id = '' + this._route.snapshot.paramMap.get('id');
      this.type = this._route.snapshot.paramMap.get('type');
        this.listService.bookReady.subscribe((ready) => {
            if(this.type === 'book') {
                this.book = this.listService.getBook(+id);
            }
        })
      this.listService.songReady.subscribe((ready) => {
            if(this.type === 'song') {
                this.song = this.listService.getSong(id)
            }
        })

  }

}
