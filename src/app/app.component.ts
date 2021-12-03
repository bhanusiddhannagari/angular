import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'posts';
  postData: any[] = [];
  show: boolean = false;
  specificPost: any = {};

  constructor(private router : Router) {

  }

  onFormSubmit(data : any) {
    this.postData.push(data);
  }
  
  handlePostClick(post: any) {
    this.specificPost = post;
  }
}
