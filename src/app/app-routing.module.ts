import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { ResultsComponent } from "./results/results.component";
import { ShortListComponent } from "./short-list/short-list.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'details/:type/:id',
        component: DetailsComponent
    },
    {
        path: 'result/:type/:searchterm',
        component: ResultsComponent
    },
    {
        path: 'list/:type',
        component: ShortListComponent
    },
    {
        path: 'music',
        redirectTo: 'list/song'
    },
    {
        path: 'books',
        redirectTo: 'list/book'
    },
    {
        path: 'home',
        component: HomeComponent,

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
