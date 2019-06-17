import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PixiModule } from 'ngxpixi';
// import {RotatingDialComponent} from "./rotating-dial";
import { StoryComponent } from './containers/story/story.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvironmentComponent } from './components/environment/environment.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    EnvironmentComponent
  ],
  imports: [
    PixiModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LottieAnimationViewModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
