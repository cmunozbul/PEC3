import { Component, OnInit } from '@angular/core';
import { Article } from '../article.modelo';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})

export class ArticleItemComponent implements OnInit {

  public name: string = '';
  public imageUrl: string = '';
  public price: number = 0;
  public isOnSale: boolean = false;
  public quantityInCart: number = 0;
  public stock: number = 0;
  public isAvailable: boolean = false;
  public priceDetails: any;

constructor() { }

ngOnInit() {                                
    this.name= 'Gucci Bloom'
    this.imageUrl= "https://images.unsplash.com/photo-1652262147172-142284cf5a6f?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    this.price= 42.50
    this.isOnSale= true
    this.quantityInCart= 15
    this.isAvailable = this.stock > 0;
    this.isAvailable = this.stock > 0;
    this.updatePriceDetails();    
  };

  aumentarCantidad() {
    if (this.stock > 0) {
    this.quantityInCart++;
    this.stock--;
    this.isAvailable = this.stock > 0;
    }

    if (this.stock === 0) {
    this.isOnSale = false;
    this.updatePriceDetails(); 
    }

  }

  reducirCantidad() {
    if (this.quantityInCart > 0) {
    this.quantityInCart--;
    this.stock++;
    this.isAvailable = this.stock > 0;
    }

    if (this.stock > 0 && !this.isOnSale) {
    this.isOnSale = true;
    this.updatePriceDetails(); 
  }
  }

  updatePriceDetails() {
    this.priceDetails = {
        "price-disabled": !this.isOnSale 
    };
  }
}