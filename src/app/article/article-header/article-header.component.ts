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

  // 按下enter的時候觸發
  @Output()
  titleChanged = new EventEmitter<any>(); //事件發射器

  isEdit = false;
  newTitle = '';
  constructor() { }

  doEdit(title: any) {
    this.newTitle = title;
    this.titleChanged.emit({ id: this.item.id, title: title });
  }

  //往父元件發射做觸發刪除文章的動作(this.item等於父元件的$event資料)
  deleteArticle() {
    this.delete.emit(this.item);
  }

  //angular生命週期(ㄧ)
  ngOnInit(): void {
    this.newTitle = this.item.title;
  }

  //angular生命週期(二)
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //很少用
  }
}
