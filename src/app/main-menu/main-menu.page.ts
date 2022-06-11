import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgClick(){
    alert('Hello Muhammed Essa');
  }

  img1(){
    alert('Hello img1');
  }

  img2(){
    alert('Hello img2');
  }

  img3(){
    alert('Hello img3');
  }


  img4(){
    alert('Hello img4');
  }

}
