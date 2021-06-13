import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-short-list',
  templateUrl: './short-list.component.html',
  styleUrls: ['./short-list.component.scss']
})
export class ShortListComponent implements OnInit {
    list: any[] = [];
    type: string = '';
  constructor(private _listService: ListService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
      this.type = this._route.snapshot.paramMap.get('type') || '';
      if(this.type === 'book') {
          this._listService.bookList10Subject.subscribe((list) => {
              this.list = list;
          })
      }
      if(this.type === 'song') {
          this._listService.songList10Subject.subscribe((list) => {
              this.list = list;
          })
      }
  }

}
