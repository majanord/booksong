import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchTerm: string = '';
    type: string = 'both' ;
    constructor(private _router: Router) { }

  ngOnInit(): void {

  }

    search(searchTerm: string) {
        if(searchTerm !== '') {
            this._router.navigateByUrl(`result/${this.type}/${encodeURI(searchTerm)}`);
        }
    }
}
