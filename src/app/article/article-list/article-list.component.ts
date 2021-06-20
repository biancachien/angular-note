import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  counter = 0;
  data$: Observable<any>;

  constructor(public datasvc: DataService) {}


  ngOnInit(): void {
    this.data$ = this.datasvc.getData();
  }

  // // 做刪除文章的動作
  // doDelete(item: any) {
  //   this.datasvc.doDelete(item).subscribe(
  //     (result) => {
  //       this.data = this.data.filter((v: any) => {
  //         return v.id !== item.id;
  //       });
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // doModify(post: any) {
  //   this.datasvc.doModify(post).subscribe(
  //     (result) => {
  //       console.log(post);
  //       this.data = this.data.map((item: any) => {
  //         if (item.id == post.id) {
  //           return Object.assign({}, item, post);
  //         }
  //         return item;
  //       });
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
