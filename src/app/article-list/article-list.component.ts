import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.modelo'; 
import { ArticleQuantityChange } from '../article-quantity-change.interface'; 

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html', 
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles: Article[] = [];

  constructor() { }

  ngOnInit() {
    this.articles = [
      {
        name: 'Gucci Bloom',
        imageUrl: "https://images.unsplash.com/photo-1652262147172-142284cf5a6f?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 42.50,
        isOnSale: true, 
        stock: 12,
        quantiyInCart: 0,
        id: 1
      },
      {
        name: 'Jimmy Choo Illicit Flower',
        imageUrl: "https://images.unsplash.com/photo-1614977789629-917c1a06041f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 38.50,
        isOnSale: true, 
        stock: 15,
        quantiyInCart: 0,
        id: 2
      },
      {
        name: 'Givenchy Irresistible',
        imageUrl: "https://images.unsplash.com/photo-1622978147823-33d5e241e976?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 35.00,
        isOnSale: true, 
        stock: 10,
        quantiyInCart: 0,
        id: 3
      }
    ];
  }

  onQuantityChange(change: ArticleQuantityChange) {
    const articleToUpdate = this.articles.find(a => a.id === change.article.id);

    if (articleToUpdate) {
      const newQuantityInCart = articleToUpdate.quantiyInCart + change.quantity;
      const newStock = articleToUpdate.stock - change.quantity;

      if (newQuantityInCart >= 0 && newStock >= 0) {
        articleToUpdate.quantiyInCart = newQuantityInCart;
        articleToUpdate.stock = newStock;
      }
    }
  }
}