import { Article } from './article.modelo';

export interface ArticleQuantityChange {
    article: Article;
    quantity: number;
}