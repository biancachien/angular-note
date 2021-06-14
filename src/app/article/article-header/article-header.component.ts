import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  // 從父元件(article-list.component)傳資料進子元件
  @Input()
  item: any;

  // 把資料從子元件送回父元件(article-list.component)
  @Output()
  delete = new EventEmitter<any>(); //事件發射器

  isEdit = false;

  constructor() { }

  //做觸發刪除文章的動作
  deleteArticle() {
    this.delete.emit(this.item);
  }

  //angular生命週期(ㄧ)
  ngOnInit(): void {
  }

  //angular生命週期(二)
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //很少用
  }
}
