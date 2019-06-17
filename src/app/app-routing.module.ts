import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoryComponent} from "./containers/story/story.component";

const routes: Routes = [
  { path: 'story',  component: StoryComponent, data: {animation: 'Story'} },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
