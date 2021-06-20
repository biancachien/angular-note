import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss'],
})
export class ArticleBodyComponent implements OnInit, OnChanges {
  // 將item從父元件input進來
  @Input()
  item: any;

  @Input()
  counter: any;

  constructor() {
    console.log('ArticleBodyComponent: constuctor');
  }
  ngOnInit(): void {
    console.log('ArticleBodyComponent ' + this.item.id + ': ngOnInit');
  }

  ngOnChanges(changes) {
    console.log('ArticleBodyComponent' + this.item.id + ': ngOnChanges');
    console.log(changes);
  }
}
