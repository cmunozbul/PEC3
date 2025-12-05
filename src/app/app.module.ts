import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component'; 
import { ArticleItemComponent } from './article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }