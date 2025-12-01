import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';

@NgModule({                            
  declarations: [
    AppComponent,
    ArticleItemComponent
  ],
  imports: [                           
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]            
})

export class AppModule { }