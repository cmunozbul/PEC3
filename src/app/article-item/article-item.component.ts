import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.modelo';
import { ArticleQuantityChange } from '../article-quantity-change.interface'; 

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() public article: Article = {} as Article; 

  @Output() public quantityChange = new EventEmitter<ArticleQuantityChange>();

  public priceDetails: any; 

  constructor() { }

  ngOnInit() {                                
    this.updatePriceDetails();    
  }

  getIsAvailable(): boolean {
    return this.article.stock > 0;
  }

  aumentarCantidad() {
    if (this.article.stock > 0) {
      this.quantityChange.emit({ article: this.article, quantity: 1 });
    }
  }

  reducirCantidad() {
    if (this.article.quantiyInCart > 0) {
      this.quantityChange.emit({ article: this.article, quantity: -1 });
    }
  }

  updatePriceDetails() {
    this.priceDetails = {
        "price-disabled": !this.article.isOnSale 
    };
  }
}