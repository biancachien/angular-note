import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [DataService],
  declarations: [
    ArticleListComponent,
    ArticleHeaderComponent,
    ArticleBodyComponent,
  ],
  exports: [ArticleListComponent], // 記得這段要自己加
})
export class ArticleModule {}
