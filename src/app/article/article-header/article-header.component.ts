import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})
export class ArticleHeaderComponent implements OnInit, OnDestroy, OnChanges {
  // 從父元件(article-list.component)傳資料進子元件
  @Input()
  item: any;

  orig_item: any;

  // 把資料從子元件送回父元件(article-list.component)
  @Output()
  delete = new EventEmitter<any>(); //事件發射器

  // 按下enter的時候觸發
  @Output()
  titleChanged = new EventEmitter<any>(); //事件發射器

  isEdit = false;
  newTitle = '';
  constructor() {}

  //angular生命週期(一)
  ngOnInit(): void {
    // this.newTitle = this.item.title;
  }

  ngOnChanges(changes): void {
    if (changes.item) {
      this.orig_item = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  //angular生命週期(二)
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //很少用
  }

  doEdit(title: any) {
    this.newTitle = title;
    // emit({ id: this.item.id, title: title })的事件資料(包含id和title)
    this.titleChanged.emit(this.item.id);
  }

  doCnacel() {
    this.item = Object.assign({}, this.orig_item);
    this.isEdit = false;
  }

  //往父元件發射做觸發刪除文章的動作(this.item等於父元件的$event資料)
  deleteArticle() {
    this.delete.emit(this.item);
  }
}
