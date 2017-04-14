import { Component, OnInit } from '@angular/core';
import {ArticlesService} from './services/articles.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})

export class ArticlesComponent implements OnInit {
  articles =[];
  constructor(private articlesService : ArticlesService) {

  }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(
          data => {
          console.log('data',data);
          this.articles = data;
    });
  }
}
