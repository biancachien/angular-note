import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss']
})
export class ArticleBodyComponent implements OnInit {
  // 將item從父元件input進來
  @Input()
  item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
